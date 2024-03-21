import React from "react";
import { useDataContext } from "./data-context.tsx";
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

export const WorkoutHistory: React.FC = () => {
    const { workoutsData, workoutsIsLoading, workoutsIsError } = useDataContext();

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                Workout History
            </Typography>
            {workoutsIsLoading ? (
                <Typography>Loading...</Typography>
            ) : workoutsIsError ? (
                <Typography>Error occurred while fetching data</Typography>
            ) : (
                <>
                    {workoutsData.workouts.map((workout: any) => (
                        <Card key={workout.id} variant="outlined" style={{ marginBottom: '16px' }}>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    Workout Type: {workout.type}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                    Date: {new Date(workout.date).toLocaleDateString()}
                                </Typography>
                                <List>
                                    {workout.exercises.map((exercise: any) => (
                                        <React.Fragment key={exercise.id}>
                                            <ListItem>
                                                <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets}, Reps: ${exercise.reps}, Weight: ${exercise.weight}`} />
                                            </ListItem>
                                            <Divider />
                                        </React.Fragment>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    ))}
                </>
            )}
        </Container>
    );
};