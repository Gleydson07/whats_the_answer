import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Tooltip, Typography } from "@material-ui/core";
import { useQuestions } from './hooks/useQuestions';

export function Statistics(){
    const {quiz} = useQuestions();

    return (
        <Box justifyContent="center" pt={2}>
            <Typography variant="h4" style={{textAlign:"center", marginBottom:"1rem"}} color="textPrimary">
                Statistics
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" height="6rem">
                <Box position="relative" width="6rem" height="100%" >
                    <Box position="absolute" display="inline-flex">
                        <CircularProgress 
                            variant="determinate" 
                            value={-(quiz.corrects/quiz.totalQuestions)*100} 
                            size={100} 
                            thickness={7} 
                            color="primary"
                        />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                        </Box>
                    </Box>
                    <Box position="absolute" display="inline-flex">
                        <CircularProgress 
                            variant="determinate" 
                            value={(quiz.incorrects/quiz.totalQuestions)*100} 
                            size={100} 
                            thickness={7} 
                            color="secondary"
                        />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            
                            <Tooltip title="Corrects">
                                <Typography variant="caption" component="div" color="primary">
                                    {`${(quiz.corrects/quiz.totalQuestions)*100}%`}
                                </Typography>
                            </Tooltip>
                            <Typography variant="caption" component="div" style={{margin:"0 2px"}}>
                                |
                            </Typography>
                            <Tooltip title="Incorrects">
                                <Typography variant="caption" component="div" color="secondary">
                                    {`${(quiz.incorrects/quiz.totalQuestions)*100}%`}
                                </Typography>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>

                <Box 
                    width={150} 
                    height="100%" 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent="center" 
                    textAlign="center" 
                    ml="5rem" 
                >
                    <Typography variant="subtitle1" color="textSecondary" >
                        <Box display="flex" width="100%" justifyContent="space-between" >
                            <span>Corrects</span>
                            <span>{quiz.corrects}</span>                        
                        </Box>               
                        <Box display="flex" width="100%" justifyContent="space-between">
                            <span>Incorrects</span>
                            <span>{quiz.incorrects}</span>
                        </Box>               
                        <Box display="flex" width="100%" justifyContent="space-between">
                            <span>Total</span>
                            <span>{quiz.totalQuestions}</span>
                        </Box>               
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}