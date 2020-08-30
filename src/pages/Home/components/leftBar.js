import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
                    <ListItemText primary="Пункт" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Пункт" />
                </ListItem>
            </List>
        </Paper>
    );
}