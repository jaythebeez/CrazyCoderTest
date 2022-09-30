import { createSlice } from '@reduxjs/toolkit';

const initialState: User[] = []

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        AddUsers: (state, action) => {
          return [...action.payload]
        },
        ClearUsers: (state) => {
          return [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { AddUsers, ClearUsers } = userSlice.actions

export default userSlice.reducer