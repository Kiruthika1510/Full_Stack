import { useState } from "react";

export default function LivePoll() {
  const pollQuestion = "Which subject do you like the most?";
  const options = ["Maths", "Science", "Computer", "English"];

  const [votes, setVotes] = useState({
    Maths: 0,
    Science: 0,
    Computer: 0,
    English: 0,
  });

  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (option) => {
    if (hasVoted) return;
    setVotes({ ...votes, [option]: votes[option] + 1 });
    setHasVoted(true);
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">📊 Live Classroom Poll</h2>
        <p className="mb-4">{pollQuestion}</p>

        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleVote(option)}
            disabled={hasVoted}
            className="w-full mb-2 p-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            {option}
          </button>
        ))}

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Live Results</h3>

        {options.map((option) => {
          const percentage = totalVotes
            ? Math.round((votes[option] / totalVotes) * 100)
            : 0;

          return (
            <div key={option} className="mb-2">
              <div className="flex justify-between text-sm">
                <span>{option}</span>
                <span>{votes[option]} votes ({percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}

        <p className="mt-4 text-sm text-gray-600">
          Total Votes: {totalVotes}
        </p>
      </div>
    </div>
  );
}
