import { styled } from "styled-components";
import { Button } from "../components/ui/Button";
import { useFormStore } from "../store/formStore";
import { useNavigate } from "react-router-dom";

const SummaryPageWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  color: #e5e7eb;

  & h1 {
    font-size: 25px;
    font-weight: 500;
  }
`;

const UserInfoWrapper = styled.div`
  display: grid;
  gap: 0.5rem;

  & span {
    color: #a1a1a9;
  }
`;

const UserTopicsList = styled.ul`
  display: grid;
  gap: 0.8rem;

  & h2 {
    color: #a1a1a9;
    font-size: 16px;
  }

  & li {
    list-style: disc;
    list-style-position: inside;
  }
`;

export const SummaryPage = () => {
  const { name, email, userTopics } = useFormStore((state) => state.userInfo);
  const resetForm = useFormStore((state) => state.resetForm);
  const navigate = useNavigate();
  const handleConfirm = () => {
    if (!confirm("are you sure?")) return;
    resetForm();
    navigate("/");
  };
  return (
    <SummaryPageWrapper>
      <h1>Summary</h1>
      <UserInfoWrapper>
        <p>
          <span>Name: </span>
          {name}
        </p>
        <p>
          <span>Email: </span>
          {email}
        </p>
      </UserInfoWrapper>
      <UserTopicsList>
        <h2>Topics: </h2>
        {userTopics.map((userTopic) => (
          <li key={userTopic}>{userTopic}</li>
        ))}
      </UserTopicsList>
      <Button text="Confirm" onClick={handleConfirm} />
    </SummaryPageWrapper>
  );
};
