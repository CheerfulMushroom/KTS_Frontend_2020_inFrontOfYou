import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },

    link: {
        textDecoration: "none",
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Выбор страны" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Общая статистика" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Сегодня" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Угрозы" />
                </ListItem>
                <ListItem button>
                    <NavLink className={classes.link} to="compare">
                        <ListItemText primary="Сравнения" />
                    </NavLink>
                </ListItem>
                <ListItem button>
                    <NavLink className={classes.link} to="history">
                        <ListItemText primary="История распространения" />
                    </NavLink>
                </ListItem>
            </List>
        </Paper>
    );
}
