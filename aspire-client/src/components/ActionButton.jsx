import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { teal, orange } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    style: {
        margin: theme.spacing(2),
        paddingLeft:theme.spacing(5),
        paddingRight: theme.spacing(5),
        padding: theme.spacing(2)
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: orange,
    },
});

export default function ActionButton(props) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color={props.kind} className={classes.style}>
                {props.value}
            </Button>
        </ThemeProvider>
    );
};