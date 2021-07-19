import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, List, ListItem, ListItemSecondaryAction, ListItemText, Tooltip, Typography } from "@material-ui/core";


export function Statistics(){
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
                        <ListItemText primary="Statistics"/>
                        <ListItem >
                            <ListItemText secondary="Correct"/>
                            <ListItemSecondaryAction >7</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Incorrects" />
                            <ListItemSecondaryAction >3</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Total" />
                            <ListItemSecondaryAction>id of quantity</ListItemSecondaryAction>
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