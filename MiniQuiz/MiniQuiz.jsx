import { useState } from "react";

export default function MiniQuiz() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
      answer: "New Delhi",
    },
    {
      question: "Which language is used in React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        {!showResult ? (
          <>
            <h2 className="text-xl font-semibold mb-2">
              Question {current + 1}
            </h2>
            <p className="mb-4">{questions[current].question}</p>

            <div className="space-y-2">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={selected !== null}
                  className={`w-full p-2 rounded-lg border transition
                    ${
                      selected === option
                        ? option === questions[current].answer
                          ? "bg-green-200 border-green-500"
                          : "bg-red-200 border-red-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={nextQuestion}
              disabled={selected === null}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg disabled:opacity-50"
            >
              Next
            </button>

            <p className="mt-4 text-sm">Score: {score}</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center">Quiz Completed 🎉</h2>
            <p className="mt-4 text-center">
              Your Score: {score} / {questions.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
