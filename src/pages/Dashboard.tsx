import React from 'react';

import { Container, Typography, Card } from "@material-ui/core";
import {Skeleton} from '@material-ui/lab';

import { useQuestions } from "../components/hooks/useQuestions";
import {StatusProgress} from "../components/StatusProgress";
import { FormQuestion } from "../components/FormQuestion";

export function Dashboard(){
    const {oneQuestion} = useQuestions();
    const {id} = oneQuestion;

    return (
        <Container>
            <Typography variant="h4" style={{marginTop: "1rem"}}>
                Dashboard
            </Typography>
            {/* <StatusProgress/> */}
            {id !== undefined ? (
                <Container maxWidth="sm">
                    <Card style={{marginTop: "2rem"}}>
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
                </Container>
            ): (
                <Container maxWidth="sm">
                    {/* <Skeleton variant="text" height={40} style={{marginTop: "2rem"}} animation="wave"/> */}
                    <Skeleton variant="rect" width="100%" height={400} style={{marginTop: "2rem"}} animation="wave"/>
                </Container>
            )}
        </Container>
    )
}