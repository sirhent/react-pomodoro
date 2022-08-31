import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";

import { CountdownContainer, CountdownDots, CountdownNumber } from "./styles";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    elapsedSeconds,
    markCurrentCycleAsFinished,
    setElapsedSeconds_
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.amountOfMinutes * 60 : 0;

  useEffect(() => {
    let cycleInterval: number;

    if (activeCycle) {
      cycleInterval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(), 
          new Date(activeCycle.startedAt),
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();

          setElapsedSeconds_(totalSeconds);
          clearInterval(cycleInterval);
        } else {
          setElapsedSeconds_(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(cycleInterval);
    };
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished]);

  const currentSeconds = activeCycle ? totalSeconds - elapsedSeconds : 0;

  const minutesCount = Math.floor(currentSeconds / 60);
  const secondsCount = currentSeconds % 60;

  const minutesToDisplay = String(minutesCount).padStart(2, "0");
  const secondsToDisplay = String(secondsCount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesToDisplay}:${secondsToDisplay}`;
    }
  }, [minutesToDisplay, secondsToDisplay, activeCycle]);

  return (
    <CountdownContainer>
      <CountdownNumber>{minutesToDisplay[0]}</CountdownNumber>
      <CountdownNumber>{minutesToDisplay[1]}</CountdownNumber>

      <CountdownDots>:</CountdownDots>

      <CountdownNumber>{secondsToDisplay[0]}</CountdownNumber>
      <CountdownNumber>{secondsToDisplay[1]}</CountdownNumber>
    </CountdownContainer>
  );
}
