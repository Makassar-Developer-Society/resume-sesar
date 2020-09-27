import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyCard from '../components/Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={12}>
                    <MyCard />
                </Grid>
            </Grid>
        </div>
    );
}