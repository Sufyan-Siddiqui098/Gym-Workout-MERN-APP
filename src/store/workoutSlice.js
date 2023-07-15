import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchWorkouts = createAsyncThunk("fetchWorkouts", async()=>{
    let response = await fetch('http://localhost:4000/api/workouts/');
    return response.json();
})

export const addWorkout = createAsyncThunk('addWorkout', async(workout)=>{
     
    let response = await fetch('http://localhost:4000/api/workouts/createworkout', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
          
    });
    return await response.json();
    
})

export const workoutSlice = createSlice({
    name:"workout",
    initialState:{
         workouts : []
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchWorkouts.fulfilled, (state, action)=>{
            state.workouts = action.payload;
        })
        builder.addCase(addWorkout.fulfilled, (state, action)=>{
            state.workouts.unshift(action.payload)
        })
        builder.addCase(addWorkout.rejected, (state, action)=>{
            console.log("Error occured!!")
        })
    }
})

export default workoutSlice.reducer;