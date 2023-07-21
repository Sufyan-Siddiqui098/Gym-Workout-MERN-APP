import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

let host = process.env.REACT_APP_HOST

export const fetchWorkouts = createAsyncThunk("fetchWorkouts", async()=>{
    let response = await fetch(`${host}/api/workouts/`);
    return response.json();
})

//Fetch id-specific workout
export const fetchWorkout = createAsyncThunk("fetchWorkout", async(id)=>{
    let response = await fetch (`${host}/api/workouts/${id}`)
    return response.json();
})

//Add new workout
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

//Update the existing workout
export const updateWorkout = createAsyncThunk('updateWorkout', async(arg)=>{  //pass arg because throwing error when passing two arguements

    const {id, updatedWorkout} = arg;
    let response = await fetch(`${host}/api/workouts/${id}`, {
        method: "PATCH",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(updatedWorkout)
    });
    let json = await response.json();

    return json;
})

//Delete the existing workout
export const deleteWorkout = createAsyncThunk("deleteWorkout", async(id)=>{
    let response = await fetch(`${host}/api/workouts/deleteworkout/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"},
        });
        //eslint-disable-next-line
        let json = await response.json()
        return json;
})

export const workoutSlice = createSlice({
    name:"workout",
    initialState:{
         workouts : [],
         workout: []
    },
    extraReducers: (builder)=>{
        //Fetch/get All workouts
        builder.addCase(fetchWorkouts.fulfilled, (state, action)=>{
            state.workouts = action.payload;
        })
        //Fetch/get id-specific Workout
        builder.addCase(fetchWorkout.fulfilled, (state, action)=>{
            state.workout = action.payload

        })
        builder.addCase(addWorkout.fulfilled, (state, action)=>{
            state.workouts.unshift(action.payload)
        })
        //delete 
        builder.addCase(deleteWorkout.fulfilled, (state, action)=>{
           let dupe = state.workouts;
           state.workouts = dupe.filter((el)=>{
            return el._id !== action.payload._id
           })
        })
       //Update Workout
       builder.addCase(updateWorkout.fulfilled, (state, action)=>{
        state.workouts = state.workouts.map((el)=>(
            el._id===action.payload._id ? action.payload : el
        ))
        console.log('updated Successfully !!')
       })
    }
})

export default workoutSlice.reducer;