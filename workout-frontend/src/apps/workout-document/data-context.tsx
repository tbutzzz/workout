import React, { createContext, useContext, ReactNode } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useQuery as useApolloQuery, gql, DocumentNode } from '@apollo/client';

type DataContextType = {
    queryClient: ReturnType<typeof useQueryClient>;
    bodyMeasurementsData: any;
    bodyMeasurementsIsLoading: boolean;
    bodyMeasurementsIsError: boolean;
    workoutsData: any;
    workoutsIsLoading: boolean;
    workoutsIsError: any;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataContextProvider');
    }
    return context;
};

export const DataContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const queryClient = useQueryClient();

    const { data: bodyMeasurementsData, isLoading: bodyMeasurementsIsLoading, isError: bodyMeasurementsIsError } = useQuery({
        queryKey: ['bodyMeasurements'],
        queryFn: () =>
            fetch('http://localhost:3000/body-measurements').then((res) =>
                res.json()
            ),
    });

    const GET_WORKOUTS = gql`
  query GetWorkouts {
    workouts {
      id
      type
      date
      exercises {
        id
        name
        sets
        reps
        weight
      }
    }
  }
`;

const { data: workoutsData, loading: workoutsIsLoading, error: workoutsIsError } = useApolloQuery(GET_WORKOUTS);

    return (
        <DataContext.Provider value={{ queryClient, bodyMeasurementsData, bodyMeasurementsIsLoading, bodyMeasurementsIsError, workoutsData, workoutsIsLoading, workoutsIsError }}>
            {children}
        </DataContext.Provider>
    );
};