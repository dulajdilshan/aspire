import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { teal, orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    style: {
        margin: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        padding: theme.spacing(2)
    },
}));

const StartButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: teal[500],
        '&:hover': {
            backgroundColor: teal[700],
        },
    },
}))(Button);

const StopButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
        '&:hover': {
            backgroundColor: orange[700],
        },
    },
}))(Button);

export default function ControlPanel() {
    const classes = useStyles();

        return (
            <div className="row">
                <StartButton variant="contained" className={classes.style}>
                    Start
                </StartButton>
                <StopButton variant="contained" className={classes.style}>
                    Stop
                </StopButton>
            </div>
        );
    
}