import { useQuestions } from "../hooks/useQuestions"
import { Statistics } from "../components/Statistics";
import { Container, Typography, Box } from '@material-ui/core';
import { FormResume } from "../components/FormResume";

export function Resume(){
    const {quiz} = useQuestions();

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
        </Container>
    )
}