import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Ratting(props) {
  //   console.log(props.setRatting);
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        defaultValue={1}
        onChange={(e, i) => {
          //   console.log(i);
          props.setRatting(i);
        }}
        precision={0.5}
      />
      {/* <Rating
        name="half-rating-read"
        defaultValue={3}
        precision={0.5}
        readOnly
      /> */}
    </Stack>
  );
}
