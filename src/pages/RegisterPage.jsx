import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useFormStore } from "../store/formStore";
import { Button } from "../components/ui/Button";

const RegisterPageWrapper = styled.form`
  display: grid;
  width: 100%;
  gap: 2.5rem;
  color: #e5e7eb;
`;

const InputWrapper = styled.div`
  display: grid;
  gap: 0.5rem;

  & label {
    text-transform: capitalize;
    font-size: 18px;
  }

  & input {
    background-color: #212936;
    font-size: 16px;
    border: solid 2px #4d5562;
    padding: 0.8rem;
    border-radius: 1rem;
    color: #e5e7eb;
  }
`;

export const RegisterPage = () => {
  const navigate = useNavigate();
  const setName = useFormStore((state) => state.setName);
  const setEmail = useFormStore((state) => state.setEmail);
  const { name, email } = useFormStore((state) => state.userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/topics");
  };
  return (
    <RegisterPageWrapper onSubmit={handleSubmit}>
      <h1 style={{ fontSize: "25px", fontWeight: "500" }}>Register</h1>
      <InputWrapper>
        <label htmlFor="name">name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          id="name"
          placeholder="Enter your name"
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          id="email"
          placeholder="Example@gmail.com"
        />
      </InputWrapper>
      <Button text="Continue" />
    </RegisterPageWrapper>
  );
};
