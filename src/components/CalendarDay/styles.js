import styled from "styled-components";

export const Reminder = styled.div`
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#5f91eb" : "#dda089"};
  &:hover {
    background-color: #496fb3;
  }
`;

export const ReminderTime = styled.span`
  display: flex;
  justify-content: end;
  float: right;
`;
