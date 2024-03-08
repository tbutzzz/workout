import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid } from '@mui/material';

export const BodyMeasurements: React.FC = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 6);

    const [formData, setFormData] = useState({
        weight: '',
        chest: '',
        abdominal: '',
        thigh: '',
        date: currentDate.toISOString().slice(0, 10) 
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <Container>
            <Typography variant='h4' align='left' sx={{ border: '1px solid #ccc', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
                Enter your body measurements
            </Typography>
            <form >
                <Grid container spacing={2} justifyContent="center" mt={4}>
                    {Object.entries(formData).map(([field, value]) => (
                        <Grid item xs={12} sm={6} key={field}>
                            <TextField
                                fullWidth
                                label={`${field.charAt(0).toUpperCase() + field.slice(1)} (${field === 'weight' ? 'lb' : 'mm'})`}
                                variant="outlined"
                                type={field === 'date' ? 'date' : 'number'}
                                name={field}
                                value={value}
                                onChange={handleChange}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

