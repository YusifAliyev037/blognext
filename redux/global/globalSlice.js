import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  is_loading: false,
};



export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload.id;
      const data = action.payload.data;

      const isFav = state.favorites.find((item) => item.id == id);

      if (isFav) {
        const filterFav = state.favorites.filter((item) => item.id != id);
        state.favorites = filterFav;
      } else {
        state.favorites = [...state.favorites, data];
      }
    },

    increment: (state) => {
      
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleFavorite } =
  globalSlice.actions;

export default globalSlice.reducer;

export const selFavorites = (state) => state.global.favorites;