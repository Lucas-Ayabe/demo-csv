import { configureStore } from "@reduxjs/toolkit";
import { energySlice } from "@energy";

const store = configureStore({
  reducer: {
    energy: energySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
