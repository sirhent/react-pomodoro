import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, HistoryTitle, TaskStatus } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <HistoryTitle>Histórico</HistoryTitle>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.amountOfMinutes} minutos</td>
                  <td>{cycle.startedAt.toISOString()}</td>
                  <td>
                    {cycle.finishedAt && (
                      <TaskStatus statusColor="green">Concluído</TaskStatus>
                    )}

                    {cycle.interruptedAt && (
                      <TaskStatus statusColor="red">Interrompido</TaskStatus>
                    )}

                    {(!cycle.finishedAt && !cycle.interruptedAt) && (
                      <TaskStatus statusColor="yellow">Em andamento</TaskStatus>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
