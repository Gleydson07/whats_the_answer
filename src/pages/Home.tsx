import { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from "formik";
import { Box, FormLabel, FormControlLabel, RadioGroup, Radio, Typography, IconButton, Tooltip, makeStyles } from '@material-ui/core';
import { useQuestions } from '../hooks/useQuestions';

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ReplayIcon from '@material-ui/icons/Replay';
import interrogateImg from '../assets/images/interrogate-fillfull.svg'

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: "96px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "64px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "30px"
        },
    },
    image: {
        width: "96px",
        [theme.breakpoints.down("sm")]: {
            width: "64px"
        },
        [theme.breakpoints.down("xs")]: {
            width: "30px"
        },
    }
}))

export function Home(){
    const history = useHistory();
    const {loadingQuantityQuestions, quantityQuestions, setDataQuiz} = useQuestions();
    const [showForm, setShowForm] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const data = localStorage.getItem("whatstheanswer@quiz");
        data && setDataQuiz(JSON.parse(data));
        data ? (
            setShowForm(false)
        ) : (
            setShowForm(true)
        );
    }, [])

    function goToResume(){
        history.push("/resume");
    }

    function restartQuiz(){
        setShowForm(true)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const value = Number(target.value);
        loadingQuantityQuestions(value);
        handleSubmit();
    };

    function handleSubmit(){
        setTimeout(() => history.push(`/confirmation`), 1000);
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{height:"100vh"}}>
            <Typography className={classes.typography} component="span" gutterBottom>
                <strong style={{color: "#f50057"}}>W</strong>
                <span style={{fontWeight: 300}}>hat's the</span>
                <strong style={{color: "#3f51b5"}}> A</strong>
                <span style={{fontWeight: 300}}>nswer</span>
                <img src={interrogateImg} alt="interrogate" className={classes.image}/>
            </Typography>
            {!showForm ? (
                <>
                    <Typography>
                        <FormLabel style={{marginTop: "1rem"}} component="legend">Choose an option. </FormLabel>
                    </Typography>
                    <Box display="flex" alignItems="center" mt="1rem">
                        <Tooltip title="Restart quiz">
                            <IconButton 
                                onClick={() => restartQuiz()}
                                style={{margin:"0.5rem"}}
                            >
                                <ReplayIcon color="primary" fontSize="large"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Check last answered quiz">
                            <IconButton 
                                onClick={() => goToResume()}
                                style={{margin:"0.5rem"}}
                            >
                                <AssignmentTurnedInIcon color="primary" fontSize="large"/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </>
            ):(
                <Formik 
                    initialValues={{
                        questionQuantity: 0
                    }}
                    onSubmit={() => handleSubmit()}
                >
                    {(formik) => (
                        <Form onSubmit={formik.handleSubmit} style={{minWidth: "300px"}}>
                            <FormLabel style={{marginTop: "1rem"}} component="legend">Select the number of questions </FormLabel>
                            <RadioGroup 
                                aria-label="questionQuantity" 
                                name="questionQuantity" 
                                id="questionQuantity" 
                                style={{marginTop: "1rem"}} 
                                value={quantityQuestions} 
                                onChange={handleChange}
                            >
                                <FormControlLabel value={5} control={<Radio />} label="5"/>
                                <FormControlLabel value={10} control={<Radio />} label="10" />
                                <FormControlLabel value={15} control={<Radio />} label="15" />
                                <FormControlLabel value={20} control={<Radio />} label="20" />
                            </RadioGroup>
                        </Form>
                    )}
                </Formik>
            )}
        </Box>
    )
}