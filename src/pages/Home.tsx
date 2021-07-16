import { ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuestions } from '../components/hooks/useQuestions';
import { Form, Formik } from "formik";
import { Box, FormLabel, FormControlLabel, RadioGroup, Radio, Typography } from '@material-ui/core';

export function Home(){
    const {quantityQuestions, quantityQuestionsValue} = useQuestions();
    const history = useHistory();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const value = Number(target.value);
        quantityQuestionsValue(value);
        handleSubmit();
    };

    function handleSubmit(){
        history.push("/confirmation");
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{height:"100vh"}}>
            <Typography component="span" variant="h4" gutterBottom>
                <strong style={{color: "red"}}>W</strong>
                <span style={{fontWeight: 300}}>hat's the</span>
                <strong style={{color: "#3f51b5"}}> A</strong>
                <span style={{fontWeight: 300}}>nswer</span>
                <strong > ?</strong>
            </Typography>
            <Formik 
                initialValues={{
                    questionQuantity: 0
                }}
                onSubmit={() => handleSubmit()}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleSubmit} >
                        <FormLabel style={{marginTop: "16px"}} component="legend">Selecione a quantidade de perguntas</FormLabel>
                        <RadioGroup aria-label="questionQuantity" name="questionQuantity" id="questionQuantity" style={{marginTop: "16px"}} value={quantityQuestions} onChange={handleChange}>
                            <FormControlLabel value={5} control={<Radio />} label="5"/>
                            <FormControlLabel value={10} control={<Radio />} label="10" />
                            <FormControlLabel value={15} control={<Radio />} label="15" />
                            <FormControlLabel value={20} control={<Radio />} label="20" />
                        </RadioGroup>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}