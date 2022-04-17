import {
  fiftyUpdated,
  fiveUpdated,
  oneUpdated,
  selectEnergy,
  selectTotalEnergy,
  tenUpdated,
  twentyUpdated,
  twoUpdated,
} from "@energy";
import { useAppDispatch } from "@shared/hooks";
import { useSelector } from "react-redux";

export const useEnergyCalculator = () => {
  const dispatch = useAppDispatch();
  const totalEnergy = useSelector(selectTotalEnergy);
  const { oneK, twoK, fiveK, tenK, twentyK, fiftyK } =
    useSelector(selectEnergy);

  return {
    total: totalEnergy,
    one: {
      value: oneK,
      set: (x: number) => dispatch(oneUpdated(x)),
    },
    two: {
      value: twoK,
      set: (x: number) => dispatch(twoUpdated(x)),
    },
    five: {
      value: fiveK,
      set: (x: number) => dispatch(fiveUpdated(x)),
    },
    ten: {
      value: tenK,
      set: (x: number) => dispatch(tenUpdated(x)),
    },
    twenty: {
      value: twentyK,
      set: (x: number) => dispatch(twentyUpdated(x)),
    },
    fifty: {
      value: fiftyK,
      set: (x: number) => dispatch(fiftyUpdated(x)),
    },
  };
};
