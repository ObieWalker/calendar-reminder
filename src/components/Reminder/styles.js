import { DebounceInput } from "react-debounce-input";

import styled from "styled-components";

export const Modal = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Conditions = styled.div`
  margin: 1rem 0 0;
`;

export const ConditionLabel = styled.label`
  display: block;
  margin: 0 0 1rem;
`;

export const ConditionIcon = styled.img`
  width: 4.8rem;
`;

export const ConditionsInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Temperature = styled.span`
  display: block;
  font-size: 2rem;
  margin: 0 1.5rem 0 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Delete = styled.button`
  color: white;
  width: 6rem;
  height: 3rem;
  background-color: #ad2929;
  &:hover {
    background-color: #a35959;
  }
`;

export const TimeCity = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const WeatherInfo = styled.div`
  width: 10rem;
  margin-top: 1rem;
`;

export const Save = styled.button`
  color: white;
  width: 6rem;
  height: 3rem;
  background-color: #003874;
  cursor: pointer;
  &:hover {
    background-color: #325f8f;
  }
`;

export const Debounce = styled(DebounceInput)`
  border: 1px solid gray;
  border-radius: 0.4rem;
  padding: 0 1rem;
  width: 60%;
`;
