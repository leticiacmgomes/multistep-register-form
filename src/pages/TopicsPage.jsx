import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/formStore";
import { Button } from "../components/ui/Button";

const TopicsPageWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  & h1 {
    font-size: 16px;
    font-weight: 500;
    color: #e5e7eb;
  }
`;

const TopicOptionWrapper = styled.div`
  & label {
    border: #a1a1a9 solid 1px;
    display: block;
    background-color: #4d5562;
    color: #e5e7eb;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }

  & input {
    display: none;
  }

  & input:checked + label {
    border-color: #845eee;
    background-color: #5425af;
  }
`;

const TopicOption = ({ id, topic, userTopics }) => {
  const toggleTopicOption = useFormStore((state) => state.toggleTopicOption);
  const isChecked = userTopics.includes(topic);
  return (
    <TopicOptionWrapper>
      <input
        checked={isChecked}
        onChange={() => toggleTopicOption(topic)}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>{topic}</label>
    </TopicOptionWrapper>
  );
};

export const TopicsPage = () => {
  const { userTopics } = useFormStore((state) => state.userInfo);
  const navigate = useNavigate();

  const topics = [
    {
      topic: "Software Development",
      id: "topic1",
    },
    {
      topic: "User Experience",
      id: "topic2",
    },
    {
      topic: "Graphic Design",
      id: "topic3",
    },
  ];

  const setTopics = () => {
    if (userTopics.length === 0) alert("Please, choose at least one topic");
    else navigate("/summary");
  };

  return (
    <TopicsPageWrapper>
      <h1>Which topics you are interested in?</h1>
      {topics.map((element) => (
        <TopicOption
          userTopics={userTopics}
          key={element.id}
          id={element.id}
          topic={element.topic}
        />
      ))}
      <Button text="Continue" onClick={setTopics} />
    </TopicsPageWrapper>
  );
};
