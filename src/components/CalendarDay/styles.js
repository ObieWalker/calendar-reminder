import styled from "styled-components";

export const Reminder = styled.span`
  width: ${(props) => (props.overFive ? "45%" : "100%")};
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#5f91eb" : "#dda089"};
  &:hover {
    background-color: #496fb3;
  }
  display: inline-block;
  font-size: 85%;
  margin: 0 2%;
  padding: 0 4px;
  border-radius: 5px;
`;

export const ReminderTime = styled.span`
  display: flex;
  justify-content: end;
  float: right;
`;
