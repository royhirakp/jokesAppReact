import React, { useEffect, useState } from "react";
import "./card.css";
const BookMarks = (props) => {
  const [data, setDta] = useState([]);
  //   console.log(props.bookmarkStatus);
  useEffect(() => {
    let getDtaFromLocalS = localStorage.getItem("jokesReact");
    getDtaFromLocalS = JSON.parse(getDtaFromLocalS);
    console.log(getDtaFromLocalS);
    if (getDtaFromLocalS !== null) {
      setDta(getDtaFromLocalS);
    }
  }, []);
  return (
    <div className="containerBookmark">
      <p>
        <b>Bookmarks</b>
      </p>
      {data.length === 0 ? (
        <>
          <b>No Bookmarks Saved</b>
        </>
      ) : (
        <>
          {data.map((data, indx) => {
            return (
              <div key={indx * 5}>
                type:{data.type} <br />
                setup :{data.setup} <br />
                punchline:{data.punchline} <br />
                ratting:{data.ratting} <br />
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default BookMarks;
