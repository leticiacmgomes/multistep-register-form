import { styled } from "styled-components";

const ButtonWrapper = styled.button`
  width: max-content;
  font-size: 18px;
  color: #e5e7eb;
  background: linear-gradient(180deg, #845eee 0%, #652cd1 100%);
  border: none;
  border-radius: 3rem;
  padding: 0.8rem 2.5rem;
  justify-self: center;
  cursor: pointer;
`;

export const Button = ({ text, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};
