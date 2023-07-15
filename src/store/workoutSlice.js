import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

let host = process.env.REACT_APP_HOST

export const fetchWorkouts = createAsyncThunk("fetchWorkouts", async()=>{
    let response = await fetch(`${host}/api/workouts/`);
    return response.json();
})

export const addWorkout = createAsyncThunk('addWorkout', async(workout)=>{
     
    let response = await fetch(`${host}/api/workouts/createworkout`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
          
    });
    return  response.json();

})

export const updateWorkout = createAsyncThunk('updateWorkout', async(id, updatedWorkout)=>{
    let response = await fetch(`${host}api/workouts/${id}`, {
        method: "PATCH",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(updatedWorkout)
    });
    return response.json();  

})

export const workoutSlice = createSlice({
    name:"workout",
    initialState:{
         workouts : []
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchWorkouts.fulfilled, (state, action)=>{
            console.log(action)
            state.workouts = action.payload;
        })
        builder.addCase(addWorkout.fulfilled, (state, action)=>{
            state.workouts.unshift(action.payload)
        })
       
    }
})

export default workoutSlice.reducer;