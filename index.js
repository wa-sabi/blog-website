import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {posts: posts});
});

app.post("/submit", (req, res) => {
  var headline = req.body["headline"];
  var content = req.body["blogText"];
  const postObj = {
    "headline": headline,
    "content": content
  }
  posts.push(postObj);
  console.log(posts);
  res.render("index.ejs", {posts: posts});
});
  
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
