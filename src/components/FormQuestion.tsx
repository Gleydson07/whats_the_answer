import React, { ChangeEvent, useState } from 'react';
import { Formik, Form } from 'formik';
import { FormControlLabel, RadioGroup, Radio, Typography, Button, Box } from '@material-ui/core';
import { useQuestions } from '../hooks/useQuestions';
import { useHistory } from 'react-router';

type Question = {
    id: number,
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    answers: string[],
}

export function FormQuestion({
    id,
    category, 
    type, 
    difficulty, 
    question, 
    correct_answer, 
    answers
}: Question) {
    const {
        loadingUserAnswer, 
        answerSelected, 
        checkAnswer, 
        getQuestion, 
        quantityQuestions
    } = useQuestions();
    const [hasNextButtonDisabled, setHasNextButtonDisabled] = useState(true);
    const [hasCorrect, setHasCorrect] = useState(false);
    const history = useHistory();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const value = String(target.value);
        loadingUserAnswer(value);
        setHasCorrect(checkAnswer(value));
        setHasNextButtonDisabled(false);
    };

    function toNextQuestion(){
        loadingUserAnswer('');
        getQuestion(id+1);
    }

    function handleSubmit(){
        loadingUserAnswer('');
        history.push('/resume');        
    }

    return (
        <Box 
            display="flex" 
            height="100%"
            width={500}
            flexDirection="column" 
        > 
            <Typography variant="h6" align="center" style={{margin: "1rem 0"}}>
                Question #{id+1} of {quantityQuestions}
            </Typography>
            <Typography align="center" style={{margin: "1rem 0", color:"#8c8c8c"}}>
                Category: {category} <br/>
                Type: {type} | Difficulty: {difficulty}
            </Typography>
            <Formik 
                initialValues={{
                    answer: 0
                }}
                onSubmit={() => handleSubmit()}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleSubmit} style={{padding: "0 2rem 2rem"}}>
                        <Typography variant="subtitle1" component="h2" style={{margin: "1rem 0"}}>
                            <span>{question}</span>
                        </Typography>
                        <RadioGroup 
                            id="answer" 
                            name="answer" 
                            aria-label="answer" 
                            style={{marginTop: "1rem"}} 
                            value={answerSelected} 
                            onChange={handleChange}
                        >
                            {answers && answers.map((item, index) => (
                                <FormControlLabel 
                                    key={index} 
                                    value={item} 
                                    control={<Radio />} 
                                    label={item}
                                    disabled={!hasNextButtonDisabled} 
                                />
                            ))}
                        </RadioGroup>
                        <Typography variant="subtitle1" component="h4" align="center" style={{padding: "1rem 0"}}>
                            {answerSelected ? (
                                <span 
                                    style={{color: hasCorrect ? "green" : "red"}}
                                >
                                    {hasCorrect ? 
                                        'Hey, you got it right 😉.' 
                                    : 
                                        `Incorrect, the correct answer is: ${correct_answer}`
                                    }
                                </span>
                            ) : ('')}
                        </Typography>
                        <Box display="flex" justifyContent="flex-end" style={{marginTop: "1rem"}}>
                            {id+1 !== quantityQuestions ? (
                                <Button 
                                    onClick={() => toNextQuestion()}
                                    variant="contained" 
                                    color="primary" 
                                    disabled={hasNextButtonDisabled}
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button 
                                    type="submit"
                                    variant="contained" 
                                    color="primary" 
                                    disabled={hasNextButtonDisabled}
                                >
                                    Finish
                                </Button>
                            )}
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};
