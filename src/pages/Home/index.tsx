import { Play } from "phosphor-react";
import { CountdownContainer, CountdownDots, CountdownNumber, FormContainer, FormInput, FormLabel, FormSpan, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <FormLabel htmlFor="task">Vou trabalhar em</FormLabel>
        <FormInput id="task" type="text"></FormInput>

        <FormLabel htmlFor="amountOfMinutes">durante</FormLabel>
        <FormInput id="amountOfMinutes" type="number"></FormInput>

        <FormSpan>minutos.</FormSpan>

        <CountdownContainer>
          <CountdownNumber>0</CountdownNumber>
          <CountdownNumber>0</CountdownNumber>

          <CountdownDots>:</CountdownDots>

          <CountdownNumber>0</CountdownNumber>
          <CountdownNumber>0</CountdownNumber>
        </CountdownContainer>

        <button type="submit">
          <Play weight="fill" size={20} />
          Iniciar
        </button>
      </FormContainer>
    </HomeContainer>
  );
}
