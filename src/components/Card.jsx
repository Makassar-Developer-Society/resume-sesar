import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Makassar Dev Society
        </Typography>
                <Typography variant="h5" component="h2" className={classes.bold}>
                    Muhammad Alkautsar Sanusi
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Lucky Laki
        </Typography>
                <Typography variant="body2" component="p">
                    Yang penting halal!
        </Typography>
            </CardContent>
        </Card>
    );
}