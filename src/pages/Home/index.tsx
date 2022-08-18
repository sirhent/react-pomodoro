import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Button } from "../../components/Button";
import { CountdownContainer, CountdownDots, CountdownNumber, FormContainer, FormGroup, FormLabel, FormSpan, HomeContainer, MinutesInput, TaskInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  amountOfMinutes: zod
      .number()
      .min(1, "O intervalo precisa ser de no mínimo 5 minutos.")
      .max(60, "O intervalo precisa ser de no máximo 60 minutos."),
});

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });
 
  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  console.log(formState.errors);

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
          <CountdownNumber>0</CountdownNumber>
          <CountdownNumber>0</CountdownNumber>

          <CountdownDots>:</CountdownDots>

          <CountdownNumber>0</CountdownNumber>
          <CountdownNumber>0</CountdownNumber>
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
