import React from 'react'
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: "100%"
    },
}));

const ChatGreeter = ({name}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Welcome {name}!
            </Typography>
            <Typography component="p">

            </Typography>
        </Paper>
    )
}

ChatGreeter.propTypes = {
    name: PropTypes.string.isRequired
}

export default ChatGreeter