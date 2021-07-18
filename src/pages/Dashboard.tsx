import React, { useEffect } from 'react';

import { Container, Paper } from "@material-ui/core";

import { Header } from "../components/Header";
import { useQuestions } from "../components/hooks/useQuestions";
import { FormQuestion } from "../components/FormQuestion";

export function Dashboard(){
    const {oneQuestion} = useQuestions();

    useEffect(() => {}, [oneQuestion])

    return (
        <Container>
            <Header/>
            {oneQuestion && (
                <Container maxWidth="sm">
                    <Paper elevation={1} variant="outlined" style={{marginTop: "3rem"}}>
                        <FormQuestion 
                            key={oneQuestion.id}
                            id={oneQuestion.id}
                            category={oneQuestion.category}
                            type={oneQuestion.type}
                            difficulty={oneQuestion.difficulty}
                            question={oneQuestion.question}
                            correct_answer={oneQuestion.correct_answer}
                            incorrect_answers={oneQuestion.incorrect_answers}
                            answers={oneQuestion.answers}
                        />
                    </Paper>
                </Container>
            )}
        </Container>
    )
}