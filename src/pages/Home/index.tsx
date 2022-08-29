import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { FormContainer, HomeContainer } from "./styles";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  amountOfMinutes: zod
      .number()
      .min(1, "O intervalo precisa ser de no mínimo 5 minutos.")
      .max(60, "O intervalo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const {
    activeCycle,
    createNewCycle,
    interruptCurrentCycle
  } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      amountOfMinutes: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    newCycleForm.reset();
  }

  const task = newCycleForm.watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <FormContainer 
        onSubmit={newCycleForm.handleSubmit(handleCreateNewCycle)}
        action=""
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        
        { activeCycle ? (
          <Button 
            onClick={interruptCurrentCycle}
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
