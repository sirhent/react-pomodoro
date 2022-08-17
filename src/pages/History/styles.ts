import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

export const HistoryContainer = styled.main`
  padding-left: 9.5rem;
  padding-right: 9.5rem;
  margin-top: 6.8rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const HistoryTitle = styled.h1`
  font-size: 2.4rem;
  color: ${(props) => props.theme.title_color};
`;

export const HistoryList = styled.div`
  width: 100%;
  max-height: 40rem;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    border-spacing: 0 10px;
    border-collapse: separate;

    th {
      padding: 1.6rem 2rem;

      background-color: ${(props) => props.theme.brand_primary_dark};

      font-size: 1.4rem;
      text-align: left;
      color: ${(props) => props.theme.table_label_text_color};

      &:first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }

    td {
      padding: 1.6rem 2rem;

      background-color: ${(props) => props.theme.history_item_bg};

      font-size: 1.4rem;
      text-align: left;
      color: ${(props) => props.theme.text_color};

      &:first-child {
        width: 50%;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "warning_color",
  green: "success_color",
  red: "danger_color",
} as const

interface TaskStatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const TaskStatus = styled.span<TaskStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 100px;

    background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
