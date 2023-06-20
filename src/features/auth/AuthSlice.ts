import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const authInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
