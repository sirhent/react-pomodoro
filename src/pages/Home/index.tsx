import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Button } from "../../components/Button";
import { CountdownContainer, CountdownDots, CountdownNumber, FormContainer, FormGroup, FormLabel, FormSpan, HomeContainer, MinutesInput, TaskInput } from "./styles";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  amountOfMinutes: zod
      .number()
      .min(1, "O intervalo precisa ser de no mínimo 5 minutos.")
      .max(60, "O intervalo precisa ser de no máximo 60 minutos."),
});

// interface NewCycleFormData {
//   task: string;
//   amountOfMinutes: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  amountOfMinutes: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const { register, handleSubmit, watch, formState, reset } = 
      useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
          task: "",
          amountOfMinutes: 0,
        },
      });
 
  function handleCreateNewCycle(data: NewCycleFormData) {
    const cycleId = String(new Date().getTime());

    const newCycle: Cycle = {
      id: cycleId,
      task: data.task,
      amountOfMinutes: data.amountOfMinutes,
    }

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(cycleId);

    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.amountOfMinutes * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - elapsedSeconds : 0;

  const minutesCount = Math.floor(currentSeconds / 60);
  const secondsCount = currentSeconds % 60;

  const minutesToDisplay = String(minutesCount).padStart(2, "0");
  const secondsToDisplay = String(secondsCount).padStart(2, "0");

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormGroup>
          <FormLabel htmlFor="task">Vou trabalhar em</FormLabel>
          <TaskInput 
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="taskSuggestions"
            {...register("task")}
          />

          <datalist id="taskSuggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <FormLabel htmlFor="amountOfMinutes">durante</FormLabel>
          <MinutesInput 
            id="amountOfMinutes" 
            type="number"
            placeholder="00"
            step={5}
            min={5}
            {...register("amountOfMinutes", { valueAsNumber: true })}>
          </MinutesInput>

          <FormSpan>minutos.</FormSpan>
        </FormGroup>

        <CountdownContainer>
          <CountdownNumber>{minutesToDisplay[0]}</CountdownNumber>
          <CountdownNumber>{minutesToDisplay[1]}</CountdownNumber>

          <CountdownDots>:</CountdownDots>

          <CountdownNumber>{secondsToDisplay[0]}</CountdownNumber>
          <CountdownNumber>{secondsToDisplay[1]}</CountdownNumber>
        </CountdownContainer>
        
        <Button 
          text="Iniciar" 
          title="Iniciar contador"
          variant="primary"
          icon="Play"
          type="submit"
          disabled={isSubmitDisabled}
        />
      </FormContainer>
    </HomeContainer>
  );
}
