import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useQuestions } from '../components/hooks/useQuestions';

export function Confirmation(){    
    const { quantityQuestionsValue } = useQuestions();
    const history = useHistory();

    function handleCancelQuiz(){
        quantityQuestionsValue(0);
        history.push('/')
    }

    function handleStartQuiz(){
        history.push('/dashboard')
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{height:"100vh"}}>
            <Typography component="span" variant="h6" gutterBottom>
                <span style={{fontWeight: 300}}>Iniciar questionário?</span>
            </Typography>
            <Box marginY={2} display="flex" justifyContent="space-between" style={{width: "300px"}}>
                <Button 
                    onClick={() => handleStartQuiz()}
                    type="button" 
                    variant="contained" 
                    color="primary" 
                    style={{width:"100px", height: "50px"}}
                >
                    Start
                </Button>    
                <Button 
                    onClick={() => handleCancelQuiz()}
                    type="button" 
                    variant="contained" 
                    color="secondary" 
                    style={{width:"100px", height: "50px"}}
                >
                    Cancel
                </Button>       
            </Box>
        </Box>
    )
}