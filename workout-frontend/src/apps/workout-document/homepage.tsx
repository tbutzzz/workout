import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { BodyMeasurements } from './body-measurements.tsx';
import { WorkoutTrack } from './workout-track.tsx';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
   

    return (
        <Container sx={{ border: '1px solid blue', padding: '20px' }}>
            <Typography variant='h2' component='h1' align='center' mt={4}>
                Health Tracking
            </Typography>
            <BodyMeasurements />
            <WorkoutTrack />
            <Link to="/workout-history" style={{ textDecoration: 'none', marginTop: '20px', display: 'block' }}>
                <Button variant="contained" color="primary">
                    Go to Workout History
                </Button>
            </Link>
        </Container>
    )
}