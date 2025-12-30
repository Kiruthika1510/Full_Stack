import { useState } from "react";

export default function Blog() {
  const [posts] = useState([
    {
      id: 1,
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces.",
      comments: []
    },
    {
      id: 2,
      title: "Understanding useState",
      content: "useState is a Hook that lets you add React state to function components.",
      comments: []
    }
  ]);

  const [commentText, setCommentText] = useState("");
  const [allPosts, setAllPosts] = useState(posts);

  const addComment = (postId) => {
    if (commentText.trim() === "") return;

    const updatedPosts = allPosts.map(post => {
      if(post.id === postId) {
        return { ...post, comments: [...post.comments, commentText] };
      }
      return post;
    });

    setAllPosts(updatedPosts);
    setCommentText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">📝 Blog</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {allPosts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="mb-4">{post.content}</p>

            <div className="mb-2">
              <input
                type="text"
                placeholder="Add a comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <button
                onClick={() => addComment(post.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Comment
              </button>
            </div>

            <div>
              <h4 className="font-semibold">Comments:</h4>
              {post.comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
              <ul className="list-disc list-inside">
                {post.comments.map((cmt, index) => (
                  <li key={index}>{cmt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


  
}
