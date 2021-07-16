import { Box, Typography } from "@material-ui/core";
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';


export function Header(){
    return (
        <Box justifyContent="center" pt={2} style={{height:"100vh"}}>
            <Typography variant="h4">
                Dashboard
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" style={{border: "1px solid red", height: "100px"}}>
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

                <Box>
                    Statistics
                </Box>

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
            </Box>

        </Box>
    )
}