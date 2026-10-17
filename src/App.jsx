import { useState } from "react";
import "./App.css";

function QuizQuestion({ question, answer, setAnswer }) {
  return (
    <div>
      <h1>{question.question}</h1>

      <textarea
        placeholder="Write your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}

export default function App() {
  const [Question, setQuestion] = useState([
    { id: 1, question: "What is full form of HTML?" },
    { id: 2, question: "What is full form of CSS?" },
    { id: 3, question: "What is full form of JS?" }
  ]);

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    if (index < Question.length - 1) {
      setIndex(index + 1);
      setAnswer("");
    } else {
      alert("Quiz completed!");
    }
  };

  return (
    <div>
      <QuizQuestion
        key={Question[index].id}
        question={Question[index]}
        answer={answer}
        setAnswer={setAnswer}
      />

      <br />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}