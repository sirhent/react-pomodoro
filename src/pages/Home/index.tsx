import { createContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { FormContainer, HomeContainer } from "./styles";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";


interface Cycle {
  id: string;
  task: string;
  amountOfMinutes: number;
  startedAt: Date;
  interruptedAt?: Date; 
  finishedAt?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  elapsedSeconds: number;
  markCurrentCycleAsFinished: () => void;
  setElapsedSeconds_: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  amountOfMinutes: zod
      .number()
      .min(1, "O intervalo precisa ser de no mínimo 5 minutos.")
      .max(60, "O intervalo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      amountOfMinutes: 0,
    },
  });

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

  function handleCreateNewCycle(data: NewCycleFormData) {
    const cycleId = String(new Date().getTime());

    const newCycle: Cycle = {
      id: cycleId,
      task: data.task,
      amountOfMinutes: data.amountOfMinutes,
      startedAt: new Date(),
    }

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(cycleId);

    newCycleForm.reset();
  }

  function handleInterruptCycle() {
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

  const task = newCycleForm.watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <FormContainer 
        onSubmit={newCycleForm.handleSubmit(handleCreateNewCycle)}
        action=""
      >
        <CyclesContext.Provider 
          value={{ 
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            elapsedSeconds,
            setElapsedSeconds_
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>
        
        { activeCycle ? (
          <Button 
            onClick={handleInterruptCycle}
            text="Interromper" 
            title="Interromper contador"
            variant="stop"
            icon="StopCircle"
            type="submit"
            disabled={false}
          />
        ) : (
          <Button 
            text="Iniciar" 
            title="Iniciar contador"
            variant="primary"
            icon="Play"
            type="submit"
            disabled={isSubmitDisabled}
          />
        )}
      </FormContainer>
    </HomeContainer>
  );
}
