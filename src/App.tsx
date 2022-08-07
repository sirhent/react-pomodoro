import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

// styles
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Button color="primary" />
      <Button color="secondary" />
      <Button color="success" />
      <Button color="danger" />
    </ThemeProvider>
  );
}
