import { Button } from "../../components/Button";
import { CountdownContainer, CountdownDots, CountdownNumber, FormContainer, FormGroup, FormInput, FormLabel, FormSpan, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <FormGroup>
          <FormLabel htmlFor="task">Vou trabalhar em</FormLabel>
          <FormInput 
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto">
          </FormInput>

          <FormLabel htmlFor="amountOfMinutes">durante</FormLabel>
          <FormInput 
            id="amountOfMinutes" 
            type="number"
            placeholder="00">
          </FormInput>

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
          variant="primary"
        />
      </FormContainer>
    </HomeContainer>
  );
}
