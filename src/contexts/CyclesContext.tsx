import { createContext, ReactNode, useState } from "react";

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

export function CyclesContextProvider(props: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setElapsedSeconds_(seconds: number) {
    setElapsedSeconds(seconds);
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) => {
      return state.map((cycle) => {
        if (cycle.id === activeCycleId)  {
          return { ...cycle, interruptedAt: new Date() };
        } else {
          return cycle;
        }
      });
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

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(cycleId);

    // newCycleForm.reset();
  }

  function interruptCurrentCycle() {
    setCycles((state) => { 
      return state.map((cycle) => {
        if (cycle.id === activeCycleId)  {
          return { ...cycle, interruptedAt: new Date() };
        } else {
          return cycle;
        }
      });
    });

    setActiveCycleId(null);
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
