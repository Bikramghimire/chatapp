import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const signInUserAsync = createAsyncThunk(
  "user/signInUserAsync",
  async (payload) => {
    try {
      const resp = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      if (resp.ok) {
        const user = await resp.json();
        toast.success(user.message);
        return user.data;
      }
    } catch (error) {}
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      const userInfo = action.payload;
      return userInfo;
    },
  },
  extraReducers: {
    [signInUserAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
