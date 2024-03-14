import React, { useState } from "react";
import { Typography, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Card, CardContent, Grid, Button } from "@mui/material";
import { Workout, Lift, workouts } from "./workout-data.ts";

export const WorkoutTrack: React.FC = () => {
    const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
    const [documentWorkout, setDocumentWorkout] = useState<Workout | null>(null)
    

    const handleWorkoutSelectChange = (e: SelectChangeEvent<string>) => {
        const selectedWorkout = e.target.value;
        const foundWorkout = workouts.find(workout => workout.name === selectedWorkout)
        setSelectedWorkout(foundWorkout || null);
    };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

           
    // }

    return (
        <Container>
            <Typography variant='h4' align='left' sx={{ border: '1px solid #ccc', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
                Select a workout to record your lifts
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="workout-select-label">Workout</InputLabel>
                        <Select
                            labelId="workout-select-label"
                            id="workout-select"
                            value={selectedWorkout?.name || ''}
                            label="Workout"
                            onChange={handleWorkoutSelectChange}
                        >
                            {workouts.map((workout, index) => (
                                <MenuItem key={index} value={workout.name}>{workout.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} key='date'>
                    <FormControl fullWidth>
                        <InputLabel id="workout-select-date"></InputLabel>
                        <TextField
                            fullWidth
                            label={"Date (day of workout)"}
                            variant="outlined"
                            type='date'
                            name='Date'
                            value={selectedWorkout?.date}
                            InputLabelProps={{ shrink: true }}
                            sx={{ marginBottom: '10px' }}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {selectedWorkout && selectedWorkout.lifts.map((lift, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card key={index} variant="outlined" sx={{ marginBottom: '10px' }}>
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>{lift.name}</Typography>
                                <Typography variant="body1">Sets: {lift.sets}</Typography>
                                <Typography variant="body1">Reps: {lift.reps}</Typography>
                                <TextField
                                    label="Weight"
                                    type="number"
                                    value={lift.weight}
                                    required
                                    sx={{ marginTop: '10px', marginBottom: '10px' }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedWorkout && (
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" variant="contained" color="primary" sx={{ marginBottom: '8px' }}>
                    Submit Workout
                </Button>
            </Grid>
            )}
            <form>
            </form>
        </Container>
    )
}
