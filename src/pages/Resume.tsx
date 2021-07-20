import { useQuestions } from "../hooks/useQuestions"
import { Statistics } from "../components/Statistics";
import { Container, Typography, Box, IconButton, FormLabel } from '@material-ui/core';
import { FormResume } from "../components/FormResume";

import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router";

export function Resume(){
    const {quiz, loadingQuantityQuestions} = useQuestions();
    const history = useHistory();

    function goToHome(){
        loadingQuantityQuestions(0)
        history.push("/");
    }

    return (
        <Container style={{marginTop:"1rem"}}>
            <Typography variant="h3">
                Resume
            </Typography>
            <Statistics/>
            <Box maxWidth="sm" mt="3rem">
                {quiz.questions.map((item, index) => (
                    <FormResume
                        key={index}
                        id={item.id}
                        category={item.category}
                        type={item.type}
                        difficulty={item.difficulty}
                        question={item.question}
                        correct_answer={item.correct_answer}
                        answers={item.answers}                
                        answer_selected_for_user={item.answer_selected_for_user}                
                    />
                ))}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" marginY="2rem">
                <Typography>
                    <FormLabel style={{marginTop: "1rem"}} component="legend">Go to home? </FormLabel>
                </Typography>
                <IconButton 
                    onClick={() => goToHome()}
                    style={{marginTop:"0.5rem"}}
                >
                    <HomeIcon color="primary" fontSize="large"/>
                </IconButton>
            </Box>
        </Container>
    )
}