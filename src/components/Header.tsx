import { useQuestions } from "./hooks/useQuestions";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, List, ListItem, ListItemSecondaryAction, ListItemText, Tooltip, Typography } from "@material-ui/core";


export function Header(){
    const {quantityQuestions} = useQuestions();
    return (
        <Box justifyContent="center" pt={2}>
            <Typography variant="h4">
                Dashboard
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" my={2} >
                <Tooltip title="Erros">
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={75} size={96} thickness={7} color="secondary"/>
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
                            <Typography variant="caption" component="div" color="textSecondary">
                                50%
                            </Typography>
                        </Box>
                    </Box>
                </Tooltip>

                <Box width={300} textAlign="center">                    
                    <List dense aria-label="main statistics" style={{padding: "0 2rem"}}>
                        <ListItemText primary="Estatísticas"/>
                        <ListItem >
                            <ListItemText secondary="Acertos"/>
                            <ListItemSecondaryAction >7</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Erros" />
                            <ListItemSecondaryAction >3</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Total" />
                            <ListItemSecondaryAction>10 de {quantityQuestions}</ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Box>

                <Tooltip title="Acertos">
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={75} size={96} thickness={7} color="primary"/>
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
                            <Typography variant="caption" component="div" color="textSecondary">
                                50%
                            </Typography>
                        </Box>
                    </Box>
                </Tooltip>
            </Box>

        </Box>
    )
}