import * as React from 'react';
import { Formik, Form } from 'formik';
import { FormLabel, FormControlLabel, RadioGroup, Radio, Typography, Container } from '@material-ui/core';

type Question = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export function FormQuestion(quiz: Question) {
    const {
        category, 
        type, 
        difficulty, 
        question, 
        correct_answer, 
        incorrect_answers
    } = quiz;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const answered = Number(target.value);
        handleSubmit();
    };

    function handleSubmit(){
        
    }

    return (
        <Container>      
            <Typography variant="h5" align="center" style={{margin: "32px 0"}}>
                Question # 01
            </Typography>

            <Typography variant="h5" align="center" style={{margin: "32px 0"}}>
                        Question # 01
            </Typography>
            <Formik 
                initialValues={{
                    answer: 0
                }}
                onSubmit={() => handleSubmit()}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleSubmit} >
                        <FormLabel style={{marginTop: "16px"}} component="legend">Selecione a quantidade de perguntas</FormLabel>
                        <RadioGroup aria-label="answer" name="answer" id="answer" style={{marginTop: "16px"}} value={1} onChange={handleChange}>
                            <FormControlLabel value={5} control={<Radio />} label="5"/>
                            <FormControlLabel value={10} control={<Radio />} label="10" />
                            <FormControlLabel value={15} control={<Radio />} label="15" />
                            <FormControlLabel value={20} control={<Radio />} label="20" />
                        </RadioGroup>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};
