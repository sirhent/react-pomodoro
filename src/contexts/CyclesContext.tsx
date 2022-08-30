import { createContext, ReactNode, useReducer, useState } from "react";
import { ActionTypes, Cycle, cyclesReducer } from "../reducers/cycles";

interface CreateCycleData {
  task: string;
  amountOfMinutes: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  elapsedSeconds: number;
  markCurrentCycleAsFinished: () => void;
  setElapsedSeconds_: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider(props: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setElapsedSeconds_(seconds: number) {
    setElapsedSeconds(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      data: {
        activeCycleId,
      },
    });
  }

  function createNewCycle(data: CreateCycleData) {
    const cycleId = String(new Date().getTime());

    const newCycle: Cycle = {
      id: cycleId,
      task: data.task,
      amountOfMinutes: data.amountOfMinutes,
      startedAt: new Date(),
    }

    console.log(newCycle);

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    });

    setElapsedSeconds(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        data: activeCycleId,
      },
    });
  }

  return (
    <CyclesContext.Provider 
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        elapsedSeconds,
        setElapsedSeconds_,
        createNewCycle,
        interruptCurrentCycle
      }}
    >
      {props.children}
    </CyclesContext.Provider>
  );
}
