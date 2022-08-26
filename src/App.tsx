import { ThemeProvider } from "styled-components";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { Router } from "./Router";

// styles
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

// import { ContextExample } from "./ContextExample";

export function App() {
  // return <ContextExample />

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
