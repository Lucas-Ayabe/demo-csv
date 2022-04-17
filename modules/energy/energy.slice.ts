import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@shared/store";
import { foldSum } from "@shared/utils/monoids";

interface EnergyState {
  oneK: number;
  twoK: number;
  fiveK: number;
  tenK: number;
  twentyK: number;
  fiftyK: number;
}

const initialState: EnergyState = {
  oneK: 0,
  twoK: 0,
  fiveK: 0,
  tenK: 0,
  twentyK: 0,
  fiftyK: 0,
};

export const energySlice = createSlice({
  name: "energy",
  initialState,
  reducers: {
    oneUpdated(state, action: PayloadAction<number>) {
      state.oneK = action.payload;
    },
    twoUpdated(state, action: PayloadAction<number>) {
      state.twoK = action.payload;
    },
    fiveUpdated(state, action: PayloadAction<number>) {
      state.fiveK = action.payload;
    },
    tenUpdated(state, action: PayloadAction<number>) {
      state.tenK = action.payload;
    },
    twentyUpdated(state, action: PayloadAction<number>) {
      state.twentyK = action.payload;
    },
    fiftyUpdated(state, action: PayloadAction<number>) {
      state.fiftyK = action.payload;
    },
    updated(state, action: PayloadAction<Partial<EnergyState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const selectEnergy = (state: RootState) => state.energy;
export const selectTotalEnergy = (state: RootState) => {
  const { oneK, twoK, fiveK, tenK, twentyK, fiftyK } = selectEnergy(state);

  return foldSum([
    oneK,
    twoK * 2,
    fiveK * 5,
    tenK * 10,
    twentyK * 20,
    fiftyK * 50,
  ]);
};

export const {
  fiftyUpdated,
  fiveUpdated,
  oneUpdated,
  tenUpdated,
  twentyUpdated,
  twoUpdated,
  updated,
} = energySlice.actions;
export default energySlice.reducer;
