// import { useState } from "react";

// function QuizQuestion({ question }) {
//   const [answer, setAnswer] = useState("");

//   return (
//     <div>
//       <h2>{question}</h2>

//       <input
//         type="text"
//         placeholder="Write your answer..."
//         value={answer}
//         onChange={(e) => setAnswer(e.target.value)}
//       />

//       <p>Your answer: {answer}</p>
//     </div>
//   );
// }

// export default function App() {
//   const [index, setIndex] = useState(0);

//   const questions = [
//     "What is HTML?",
//     "What is CSS?",
//     "What is JS?"
//   ];

//   return (
//     <div>
//       <QuizQuestion question={questions[index]} />

//       <button
//         onClick={() => setIndex(index + 1)}
//         disabled={index === questions.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// }