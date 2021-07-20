import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Tooltip, Typography, Divider } from "@material-ui/core";
import { useQuestions } from '../hooks/useQuestions';

export function Statistics(){
    const {quiz} = useQuestions();

    return (
        <Box 
            py={2} 
            maxWidth={500}
            minWidth="xs"
            margin="0 auto"
        >
            <Typography variant="h4" style={{textAlign:"center", marginBottom:"1rem"}} color="textPrimary">
                Statistics
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-around" height="9rem">
                <Box position="relative" width="9rem" height="100%" >
                    <Box position="absolute" display="inline-flex">
                        <CircularProgress 
                            variant="determinate" 
                            value={-(quiz.corrects/quiz.totalQuestions)*100} 
                            size={144} 
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
                            value={((quiz.totalQuestions-quiz.corrects)/quiz.totalQuestions)*100} 
                            size={144} 
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
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            
                            <Tooltip title="Corrects">
                                <Typography 
                                    variant="caption" 
                                    component="h2" 
                                    align="center" 
                                    color="primary"
                                >
                                    <span>{`${(quiz.corrects/quiz.totalQuestions)*100}%`}</span>  
                                    <br/>                                  
                                    <span>Corrects</span>
                                </Typography>
                            </Tooltip>
                            <Divider 
                                orientation="horizontal" 
                                variant="middle" 
                                style={{height:"1px", width:"50%"}}
                            />
                            <Tooltip title="Incorrects">
                                <Typography 
                                    variant="caption" 
                                    component="h2" 
                                    align="center" 
                                    color="secondary"
                                >
                                    <span>Incorrects</span>
                                    <br/>
                                    <span>{`${((quiz.totalQuestions-quiz.corrects)/quiz.totalQuestions)*100}%`}</span>
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
                >
                    <Typography variant="subtitle1" color="textSecondary" >
                        <Box display="flex" width="100%" justifyContent="space-between" >
                            <span>Corrects</span>
                            <span>{quiz.corrects}</span>                        
                        </Box>               
                        <Box display="flex" width="100%" justifyContent="space-between">
                            <span>Incorrects</span>
                            <span>{(quiz.totalQuestions-quiz.corrects)}</span>
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