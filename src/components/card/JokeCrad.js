import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Ratting from "./Ratting";
import Loader from "./Loader";
import Footer from "./Footer";
export default function JokeCard(props) {
  const [setup, setsetup] = React.useState("");
  const [ratting, setRatting] = React.useState(0);
  const [type, setType] = React.useState("");
  const [punchline, setpunchline] = React.useState("");
  const [id, setid] = React.useState("");
  const [loderSataus, setLoaderStatus] = React.useState(false);
  function getJoke() {
    setLoaderStatus(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setid(data.id);
        setpunchline(data.punchline);
        setsetup(data.setup);
        setType(data.type);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaderStatus(false));
  }

  React.useEffect(() => {
    getJoke();
    // console.log("useEtfftect working");
  }, []);
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <div style={{ background: "rgb(222, 236, 208)", borderRadius: "6px" }}>
          <h1>Jokes App</h1>
          <CardActions style={{ padding: "5px 0px 0px 100px" }}>
            <Button onClick={() => getJoke()}>new joke</Button>
            <Button
              onClick={() => {
                props.setBookmarkStatus((prv) => !prv);
              }}
            >
              <BookmarksIcon />
            </Button>
          </CardActions>
        </div>

        <CardContent>
          <Typography variant="body2">
            <b>Type:</b> {type}
            <Button
              onClick={() => {
                //ass bookmarks in in the local sorages;
                let getLocalSdata = localStorage.getItem("jokesReact");
                if (getLocalSdata) {
                  let arrDtaa = JSON.parse(getLocalSdata);
                  console.log(arrDtaa);
                  arrDtaa.push({
                    id,
                    type,
                    punchline,
                    setup,
                    ratting,
                  });
                  localStorage.setItem("jokesReact", JSON.stringify(arrDtaa));
                  console.log("iff", getLocalSdata, arrDtaa);
                } else {
                  let convertString = JSON.stringify([
                    {
                      id,
                      type,
                      punchline,
                      setup,
                      ratting,
                    },
                  ]);
                  localStorage.setItem("jokesReact", convertString);
                }
              }}
            >
              <BookmarkAddIcon />
            </Button>
            <br />
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {setup}
          </Typography>
          <Typography variant="body2">
            {punchline}
            <br />
          </Typography>
        </CardContent>
        {/* footer and ratting components  */}
        <u>
          <i>set your Ratting:</i>
        </u>
        <div style={{ padding: "1px 50px 0 110px" }}>
          <Ratting setRatting={setRatting} />
        </div>
        <Footer />
      </Card>
      {loderSataus ? <Loader /> : ""}
    </>
  );
}
