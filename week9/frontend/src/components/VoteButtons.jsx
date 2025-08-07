import { useState } from "react";

function VoteButtons({ post }) {
  const [votes, setVotes] = useState(post.votes || 0);

  return (
    <div>
      <button onClick={() => setVotes(votes + 1)}>⬆️</button>
      <span style={{ margin: "0 0.5rem" }}>{votes}</span>
      <button onClick={() => setVotes(votes - 1)}>⬇️</button>
    </div>
  );
}

export default VoteButtons;
