import { createContext, ReactNode, useReducer, useState } from "react";

interface CreateCycleData {
  task: string;
  amountOfMinutes: number;
}

interface Cycle {
  id: string;
  task: string;
  amountOfMinutes: number;
  startedAt: Date;
  interruptedAt?: Date;
  finishedAt?: Date;
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

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function CyclesContextProvider(props: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer((state: CyclesState, action: any) => {
    switch (action.type) {
      case "ADD_NEW_CYCLE":
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        };

      case "INTERRUPT_CURRENT_CYCLE":
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedAt: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };

      case "MARK_CURRENT_CYCLE_AS_FINISHED":
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedAt: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };

      default:
        return state;
    }
  }, {
    cycles: [],
    activeCycleId: null,
  });

  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setElapsedSeconds_(seconds: number) {
    setElapsedSeconds(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: "MARK_CURRENT_CYCLE_AS_FINISHED",
      data: {
        activeCycleId,
      },
    });
    
    // setCycles((state) => {
    //   return state.map((cycle) => {
    //     if (cycle.id === activeCycleId)  {
    //       return { ...cycle, interruptedAt: new Date() };
    //     } else {
    //       return cycle;
    //     }
    //   });
    // });
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
      type: "ADD_NEW_CYCLE",
      payload: {
        newCycle,
      },
    });

    // setCycles((state) => [...state, newCycle]);
    // setActiveCycleId(cycleId);

    setElapsedSeconds(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: "INTERRUPT_CURRENT_CYCLE",
      payload: {
        data: activeCycleId,
      },
    });

    // setCycles((state) => { 
    //   return state.map((cycle) => {
    //     if (cycle.id === activeCycleId)  {
    //       return { ...cycle, interruptedAt: new Date() };
    //     } else {
    //       return cycle;
    //     }
    //   });
    // });

    // setActiveCycleId(null);
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
