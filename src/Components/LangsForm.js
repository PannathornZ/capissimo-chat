import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import England from "../Assets/gb.svg"
import Germany from "../Assets/de.svg"
import France from "../Assets/fr.svg"
import Thailand from "../Assets/th.svg"
import China from "../Assets/zh.svg"
import Japan from "../Assets/jp.svg"
import Spain from "../Assets/es.svg"
import PropTypes from "prop-types";

const supportedLangs = [
    {
        fullName: "French",
        icon: France,
        key: "fr"
    },
    {
        fullName: "Japanese",
        icon: Japan,
        key: "ja"
    },
    {
        fullName: "Chinese",
        icon: China,
        key: "zh"
    },
    {
        fullName: "Spanish",
        icon: Spain,
        key: "es"
    },
    {
        fullName: "English",
        icon: England,
        key: "en"
    },
    {
        fullName: "German",
        icon: Germany,
        key: "de"
    },
    {
        fullName: "Thai",
        icon: Thailand,
        key: "th"
    },
];

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(3, 0, 2),
        width: '100%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        width: "15%",
        padding: "5%",
        borderRadius: "20px",
        cursor: 'pointer'
    },
    figure: {
        cursor: 'pointer',
        textAlign: 'center'
    },
}));

const LangForm = ({setLang}) => {
    const classes = useStyles();

    const pickLang = (e) => {
        e.preventDefault();

        setLang({
            key: e.target.getAttribute('data-key'),
            fullName: e.target.getAttribute('title'),
            icon: e.target.getAttribute('src')
        });
    };

    return (
        <Container component="main"
                   maxWidth="xs"
                   className={classes.container}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Please select your language.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        {supportedLangs.map((lang) => {
                            return (
                                <figure key={lang.key}
                                        onClick={pickLang}
                                        className={classes.figure}>
                                    <img
                                        className={classes.img}
                                        src={lang.icon}
                                        alt={lang.fullName}
                                        title={lang.fullName}
                                        data-key={lang.key}
                                    />
                                    <figcaption>{lang.fullName}</figcaption>
                                </figure>
                            )
                        })}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

LangForm.propTypes = {
    setLang: PropTypes.func.isRequired,
}

export default LangForm