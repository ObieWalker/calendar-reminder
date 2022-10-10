import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  border-radius: 3%;
  padding: 3rem 2rem;
  width: 25rem;
  height: 30rem;
  background-color: #abd9ff;
  box-shadow: 0 0 32rem rgba(0, 0, 0, 10);
  transform: translate(-50%, -50%);
`;

export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  border-radius: 0 1rem 0 1rem;
  height: 4rem;
  padding: 0;
  width: 4.5rem;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  will-change: background-color;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 2rem;
    height: 2px;
    width: 1rem;
    background-color: #000;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    background-color: #0043;
  }
`;

export const Title = styled.h3`
  margin: 0 0 2rem 0;
`;

export const ReminderTitle = styled.h4`
  margin: 2rem 0 0 0;
`;

export const ReminderDiv = styled.div`
  height: 1rem;
`;
