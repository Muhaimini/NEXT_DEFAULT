import create from "zustand";
import { StoreProps } from "./types";

export const useStore = create<StoreProps>((set) => ({
  counter: 0,
  setCounter: (params: number) =>
    set((state) => ({ ...state, counter: params })),
}));

/**
 * HOW TO USE
    1. import { useStore } from "^store";
    2. set to body of component
    const { number, setNumber } = useStore((state) => ({
    number: state.counter,
    setNumber: state.setCounter,
    }));
 */
