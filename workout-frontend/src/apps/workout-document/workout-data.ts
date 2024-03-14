
const currentDate = new Date();
currentDate.setHours(currentDate.getHours() - 6);

export interface Lift {
    name: string;
    sets: number;
    reps: string;
    weight: number;
}

export interface Workout {
    name: string;
    date: string;
    lifts: Lift[];
}

export const workouts: Workout[] = [
    {
        name: 'PullA',
        date: currentDate.toISOString().split('T')[0],
        lifts: [
            {
                name: 'Barbell Deadlift',
                sets: 5,
                reps: '5',
                weight: 0,
            },
            {
                name: 'Pull Ups',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Cable Rows',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Face Pulls',
                sets: 4,
                reps: '12-15',
                weight: 0,
            },
            {
                name: 'Hammer Curls',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Dumbbell Shrugs',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Cable Curls',
                sets: 4,
                reps: '10-12',
                weight: 0,
            }
        ]
    },
    {
        name: 'PushA',
        date: currentDate.toISOString().split('T')[0],
        lifts: [
            {
                name: 'Flat Bench Press',
                sets: 5,
                reps: '5',
                weight: 0,
            },
            {
                name: 'Seated Dumbbell Press',
                sets: 3,
                reps: '6-8',
                weight: 0,
            },
            {
                name: 'Incline Dumbbell Bench Press',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Lateral Raises',
                sets: 4,
                reps: '12-15',
                weight: 0,
            },
            {
                name: 'Tricep Pushdowns',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Cable Cross Overs',
                sets: 4,
                reps: '10-12',
                weight: 0,
            }
        ]
    },
    {
        name: 'LegsA',
        date: currentDate.toISOString().split('T')[0],
        lifts: [
            {
                name: 'Back Squat',
                sets: 5,
                reps: '5',
                weight: 0,
            },
            {
                name: 'Romanian Deadlift',
                sets: 3,
                reps: '6-8',
                weight: 0,
            },
            {
                name: 'Leg Press',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Leg Curls',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Standing Calf Raises',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Seated Calf Raises',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Decline Crunches',
                sets: 4,
                reps: '10-12',
                weight: 0,
            }
        ]
    },
    {
        name: 'PullB',
        date: currentDate.toISOString().split('T')[0],
        lifts: [
            {
                name: 'Barbell Rows',
                sets: 3,
                reps: '6-8',
                weight: 0,
            },
            {
                name: 'Pull Ups',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'One Arm Rows',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'HyperExtensions',
                sets: 4,
                reps: '12-15',
                weight: 0,
            },
            {
                name: 'Preacher Curls',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Barbell Shrugs',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Standing Dumbbell Curls',
                sets: 4,
                reps: '10-12',
                weight: 0,
            }
        ]
    },
    {
        name: 'PushB',
        date: currentDate.toISOString().split('T')[0],
        lifts: [
            {
                name: 'Overhead Press',
                sets: 5,
                reps: '5',
                weight: 0,
            },
            {
                name: 'Dumbbell Bench Press',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Chest Dips',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Single Arm Lateral Raises',
                sets: 4,
                reps: '12-15',
                weight: 0,
            },
            {
                name: 'Cable Flyes',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Overhead Tricep Extension',
                sets: 4,
                reps: '10-12',
                weight: 0,
            }
        ]
    },
    {
        name: 'LegsB',
        date: currentDate.toISOString().split('T')[0],
        lifts: [
            {
                name: 'Front Squat',
                sets: 5,
                reps: '5',
                weight: 0,
            },
            {
                name: 'Glute Ham Raise',
                sets: 3,
                reps: '8-10',
                weight: 0,
            },
            {
                name: 'Dumbbell Lunges',
                sets: 3,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Leg Extensions',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Standing Calf Raises',
                sets: 4,
                reps: '10-12',
                weight: 0,
            },
            {
                name: 'Hanging Leg Raises',
                sets: 4,
                reps: '10-12',
                weight: 0,
            }
        ]
    }
]