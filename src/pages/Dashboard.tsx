import React from 'react';

import { Container, Typography, Card, Box } from "@material-ui/core";
import {Skeleton} from '@material-ui/lab';

import { useQuestions } from "../hooks/useQuestions";
import { FormQuestion } from "../components/FormQuestion";

export function Dashboard(){
    const {oneQuestion} = useQuestions();

    return (
        <Container style={{height:"100vh", display:"flex", flexDirection: "column"}}>
            <Typography variant="h4" style={{paddingTop: "1rem"}}>
                Dashboard
            </Typography>
            <Box 
                display="flex" 
                maxWidth="sm" 
                margin="auto 0" 
                alignItems="center" 
                justifyContent="center" 
                height="100%"
            >
                {oneQuestion.id !== undefined ? (
                    <Card>
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
                    </Card>
                ): (
                    <Container maxWidth="sm">
                        {/* <Skeleton variant="text" height={40} style={{marginTop: "2rem"}} animation="wave"/> */}
                        <Skeleton variant="rect" width="100%" height={400} style={{marginTop: "2rem"}} animation="wave"/>
                    </Container>
                )}
            </Box>
        </Container>
    )
}