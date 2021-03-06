import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

export default function Step4(props) {
    const day = localStorage.getItem('day')
    const hour = localStorage.getItem('hour')
    const doctor = localStorage.getItem('doctor')
    return (
        <Grid container justify='center'>
            <Grid item xs={6}>
                <Card >
                    <CardContent>
                        <Typography align='center' color="textSecondary" gutterBottom>Your Appointment</Typography>
                        <Typography align='center' color="textSecondary" gutterBottom>On: {day} <span>, At: </span>{hour}</Typography>
                        <Typography align='center' color="textSecondary" gutterBottom>By Dr.{doctor}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}