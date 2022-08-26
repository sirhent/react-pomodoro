import { FormGroup, FormLabel, FormSpan, MinutesInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../contexts/CyclesContext";

// interface NewCycleFormData {
//   task: string;
//   amountOfMinutes: number;
// }

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormGroup>
      <FormLabel htmlFor="task">Vou trabalhar em</FormLabel>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="taskSuggestions"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register("amountOfMinutes", { valueAsNumber: true })}>
      </MinutesInput>

      <FormSpan>minutos.</FormSpan>
    </FormGroup>
  );
}
