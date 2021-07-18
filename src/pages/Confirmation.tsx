import { useHistory } from 'react-router';
import { Box, Button, Typography } from '@material-ui/core';
import { useQuestions } from '../components/hooks/useQuestions';

export function Confirmation(){    
    const { loadingQuantityQuestions, loadingQuestions, quantityQuestions } = useQuestions();
    const history = useHistory();

    function handleCancelQuiz(){
        loadingQuantityQuestions(0);
        history.push('/')
    }

    function handleStartQuiz(){
        loadingQuestions();
        history.push('/dashboard');
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{height:"100vh"}}>
            <Typography component="span" variant="h6">
                <span style={{fontWeight: 300}}>Start quiz?</span>
            </Typography>
            <Typography component="span" style={{color:"#9d9d9d"}} gutterBottom>
                <span style={{fontWeight: 300}}>Estimated time: { (Math.round(Number(quantityQuestions) * 0.75))} min</span>
            </Typography>
            <Box marginY={2} display="flex" justifyContent="space-between" style={{width: 300}}>
                <Button 
                    onClick={() => handleStartQuiz()}
                    type="button" 
                    variant="contained" 
                    color="primary" 
                    style={{width: 100, height: 50}}
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