import React from "react";
import "./index.css";
import axios from "axios";
import Card from "./../Card";
import { Button, Typography } from "@mui/material";

export default function CardView() {
  const [redditData, setRedditData] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://www.reddit.com/r/pics/.json?jsonp=").then((res) => {
      setRedditData(res.data.data.children);
    });
  }, []);

  function applyFilter(property, rev = 1) {
    const data = [...redditData];

    data.sort((p1, p2) => {
      if (p1.data[property] > p2.data[property]) {
        return rev > 0 ? 1 : -1;
      } else if (p1.data[property] < p2.data[property]) {
        return rev > 0 ? -1 : 1;
      }

      return 0;
    });

    setRedditData([...data]);
  }

  const filterBtns = [
    { name: "Time (Asc)", callback: () => applyFilter("created") },
    { name: "Time (Desc)", callback: () => applyFilter("created", -1) },
    {
      name: "Votes (Asc)",
      callback: () => applyFilter("ups"),
    },
    {
      name: "Votes (Desc)",
      callback: () => applyFilter("ups", -1),
    },
    {
      name: "Author (Asc)",
      callback: () => applyFilter("author"),
    },
    {
      name: "Author (Desc)",
      callback: () => applyFilter("author", -1),
    },
    {
      name: "By No. Awards (Asc)",
      callback: () => applyFilter("total_awards_received"),
    },
    {
      name: "By No. Awards (Desc)",
      callback: () => applyFilter("total_awards_received", -1),
    },
    {
      name: "Score (Asc)",
      callback: () => applyFilter("score"),
    },
    {
      name: "Score (Desc)",
      callback: () => applyFilter("score", -1),
    },
  ];

  return (
    <div className="cardview-container">
      <Typography variant="h5" mt={3} mb={2}>
        Sort By
      </Typography>
      <div className="filter-btns">
        {filterBtns.map((btn) => {
          return (
            <Button
              key={btn.name}
              variant="contained"
              sx={{ marginRight: "0.7em", marginBottom: "0.7em" }}
              disableElevation
              onClick={btn.callback}
            >
              <Typography variant="p">{btn.name}</Typography>
            </Button>
          );
        })}
      </div>
      <div className="card-list">
        {redditData.length
          ? redditData.map((img, i) => {
              return <Card imageData={img.data} key={i} />;
            })
          : "Loading..."}
      </div>
    </div>
  );
}
