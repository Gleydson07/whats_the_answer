import React, { ChangeEvent, useState } from 'react';
import { Formik, Form } from 'formik';
import { FormControlLabel, RadioGroup, Radio, Typography, Container, Button, Box } from '@material-ui/core';
import { useQuestions } from './hooks/useQuestions';

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
    const {loadingUserAnswer, answerSelected, checkAnswer, getQuestion, quantityQuestions} = useQuestions();
    const [hasNextButtonDisabled, setHasNextButtonDisabled] = useState(true);
    const [hasCorrect, setHasCorrect] = useState(false);

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

    function finishQuiz(){
        loadingUserAnswer('');
    }

    function handleSubmit(){
        
    }

    return (
        <Container > 
            <Typography variant="h5" align="center" style={{margin: "1rem 0"}}>
                Question # {id+1}
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
                        <Typography variant="subtitle1" align="center" style={{margin: "1rem 0"}}>
                            {question}
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
                        <Typography variant="subtitle1" align="center" style={{margin: "1rem 0"}}>
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
                                    onClick={() => finishQuiz()}
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
        </Container>
    );
};
