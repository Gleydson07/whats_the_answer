import { Card } from '@material-ui/core';
import { Typography, Box } from '@material-ui/core';
import { useQuestions } from '../hooks/useQuestions';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

type Question = {
    id: number,
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    answers: string[],
    answer_selected_for_user?: string;
}

export function FormResume({
    id,
    category, 
    type, 
    difficulty, 
    question, 
    correct_answer, 
    answers,
    answer_selected_for_user
}: Question) {
    const {quantityQuestions} = useQuestions();

    function checkAnswer(item: string){
        if(item !== correct_answer && item === answer_selected_for_user){
            return <HighlightOffIcon color="secondary"/>
        }

        if(item === correct_answer){
            return <CheckCircleOutlineIcon color="primary"/>
        }

        if(item !== correct_answer && item !== answer_selected_for_user){
            return <RadioButtonUncheckedIcon color="disabled"/>
        }
    }

    return (
        <Box 
            display="flex" 
            height="100%"
            maxWidth={500}
            minWidth="xs"
            flexDirection="column" 
            justifyContent="center" 
            margin="1rem auto"
        > 
            <Card style={{marginTop:"1rem"}}>
                <Typography variant="h6" align="center" style={{margin: "1rem 0"}}>
                    Question #{id+1} of {quantityQuestions}
                </Typography>
                <Typography align="center" style={{margin: "1rem 0", color:"#8c8c8c"}}>
                    Category: {category} <br/>
                    Type: {type} | Difficulty: {difficulty}
                </Typography>
                <Box style={{padding: "0 2rem 2rem"}}>
                    <Box>
                        <Typography variant="subtitle1" style={{margin: "1rem 0"}}>
                            {question}
                        </Typography>
                    </Box>
                    {answers.map((item, index) => (
                        <Typography variant="subtitle1" style={{margin: "1rem 0", color:"#8c8c8c"}} key={index}>
                            <Box display="flex" alignItems="center" >
                                {checkAnswer(item)}
                                <span style={{marginLeft:"0.5rem"}}>{item}</span>
                            </Box>
                        </Typography>
                    ))}
                </Box>
            </Card>
        </Box>
    );
};
