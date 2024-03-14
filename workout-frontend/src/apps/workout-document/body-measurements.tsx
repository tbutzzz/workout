import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid } from '@mui/material';

export const BodyMeasurements: React.FC = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 6);
    const birthdate = new Date('1989-03-18');
    const ageDate = new Date(Date.now() - birthdate.getTime());

    const [formData, setFormData] = useState({
        weight: '',
        chest: '',
        abdominal: '',
        thigh: '',
        age: ageDate.getFullYear() - 1970,
        date: currentDate.toISOString().split('T')[0]
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const formDataWithNumbers = {
            ...formData,
            weight: parseFloat(formData.weight),
            chest: parseFloat(formData.chest),
            abdominal: parseFloat(formData.abdominal),
            thigh: parseFloat(formData.thigh),
        };

        try{
            const response = await fetch('http://localhost:3000/body-measurements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataWithNumbers)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setFormData({
                weight: '',
                chest: '',
                abdominal: '',
                thigh: '',
                age: ageDate.getFullYear() - 1970,
                date: currentDate.toDateString()
            });

            alert('Form submitted successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to submit form');
        }
    }


    return (
        <Container>
            <Typography variant='h4' align='left' sx={{ border: '1px solid #ccc', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
                Enter your body measurements
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} justifyContent="center" mt={4}>
                    {Object.entries(formData).map(([field, value]) => (
                        <Grid item xs={12} sm={6} key={field}>
                            <TextField
                                fullWidth
                                label={`${field.charAt(0).toUpperCase() + field.slice(1)} (${field === 'weight' ? 'lb' : field === 'age' ? 'years' : field === 'date' ? 'day of measurement' : 'mm'})`}
                                variant="outlined"
                                type={field === 'date' ? 'date' : 'number'}
                                name={field}
                                value={value}
                                required
                                onChange={handleChange}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" sx={{marginBottom:'8px'}}>
                            Submit Measurements
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

