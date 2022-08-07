import { HeaderContainer, HeaderLink, HeaderNav } from "./styles";

import { Scroll, Timer } from "phosphor-react";

import pomodoroLogo from "../../assets/images/brand/react-pomodoro-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={pomodoroLogo} alt="" />

      <HeaderNav>
        <HeaderLink to="/" title="Timer">
          <Timer size={26} />
        </HeaderLink>
        <HeaderLink to="/history" title="Histórico">
          <Scroll size={26} />
        </HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
}
