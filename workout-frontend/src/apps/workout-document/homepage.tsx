import React from 'react';
import { Typography, Container } from '@mui/material';
import { BodyMeasurements } from './body-measurements.tsx';

export const HomePage: React.FC = () => {
    return (
        <Container sx={{ border: '1px solid blue', padding: '20px' }}>
            <Typography variant='h2' component='h1' align='center' mt={4}>
                Health Tracking
            </Typography>
            <BodyMeasurements />
        </Container>
    )
}