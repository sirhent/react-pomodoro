import styled from "styled-components";

import noiseImage from "../../assets/images/misc/Rectangle-noise.png";

export const NoiseOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("${noiseImage}");
  background-repeat: repeat;
  opacity: 0.07;

  z-index: 999999;
  pointer-events: none;
`;
