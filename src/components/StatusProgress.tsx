import { useEffect, useState } from 'react';
import { useQuestions } from './hooks/useQuestions';
import { Container, Box, Typography, LinearProgress } from '@material-ui/core';

export function StatusProgress() {
    const { quantityQuestions, answerSelected, oneQuestion } = useQuestions();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(Math.round((oneQuestion.id+1/quantityQuestions)*100))
    }, [answerSelected])

    return (
        <Box alignItems="center" mt={3} >
            <Container maxWidth="sm" style={{marginTop: "3rem"}}>
                <Box>
                    <Box display="flex" maxWidth="100%">
                        <LinearProgress 
                            variant="determinate" 
                            value={progress} 
                            style={{minWidth:"100%"}}
                        />
                    </Box>
                    <Box display="flex">
                        <Typography variant="body2" color="textSecondary">
                            {`${progress | 0}` +"%"}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
  );
}