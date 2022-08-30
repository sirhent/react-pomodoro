import { ThemeProvider } from "styled-components";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { Router } from "./Router";

// styles
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NoiseOverlay />
      <GlobalStyle />

      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </ThemeProvider>
  );
}
