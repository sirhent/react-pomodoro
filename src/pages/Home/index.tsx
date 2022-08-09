import { Button } from "../../components/Button";
import { CountdownContainer, CountdownDots, CountdownNumber, FormContainer, FormGroup, FormLabel, FormSpan, HomeContainer, MinutesInput, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <FormGroup>
          <FormLabel htmlFor="task">Vou trabalhar em</FormLabel>
          <TaskInput 
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="taskSuggestions">
          </TaskInput>

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
            max={60}>
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
          disabled={false}
        />
      </FormContainer>
    </HomeContainer>
  );
}
