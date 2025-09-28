import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Stepper } from "./components/ui/Stepper";
import "./App.css";

const WrapperOutlet = styled.div`
  background-color: #212936;
  width: 100%;
  max-width: 500px;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
`;

function App() {
  return (
    <div className="App">
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
      <Stepper />
    </div>
  );
}

export default App;
