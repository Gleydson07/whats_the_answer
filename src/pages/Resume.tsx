import { useQuestions } from "../components/hooks/useQuestions"
import { Statistics } from "../components/Statistics";
import { Container, Typography, Box } from '@material-ui/core';
import { FormQuestion } from "../components/FormQuestion";

export function Resume(){
    const {quiz} = useQuestions();

    return (
        <Container style={{marginTop:"1rem"}}>
            <Typography variant="h3">
                Resume
            </Typography>
            <Statistics/>
            <Box maxWidth="sm" mt="5rem">
                {quiz.questions.map(item => (
                    <FormQuestion 
                        key={item.id}
                        id={item.id}
                        category={item.category}
                        type={item.type}
                        difficulty={item.difficulty}
                        question={item.question}
                        correct_answer={item.correct_answer}
                        incorrect_answers={item.incorrect_answers}
                        answers={item.answers}                
                    />
                ))}
            </Box>
        </Container>
    )
}