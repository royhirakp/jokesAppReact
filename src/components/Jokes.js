import React, { useState } from "react";
import JokeCard from "./card/JokeCrad";
import BookMarks from "./card/BookMarks";

const Jokes = () => {
  const [bookmarkStatus, setBookmarkStatus] = useState(false);
  return (
    <div>
      <JokeCard setBookmarkStatus={setBookmarkStatus} />
      {bookmarkStatus ? <BookMarks /> : ""}
    </div>
  );
};

export default Jokes;
