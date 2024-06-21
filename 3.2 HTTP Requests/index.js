import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("<h1>Hello, World!</h1>");
})

app.get("/contact", (req, res) => {
  res.send ("<h1>Contact</h1><p><b>E-mail:</b> skuplik.s@seznam.cz</p>");
})

app.get("/about", (req, res) =>{
  res.send("<h1>About Me</h1><p>Web Dev.</p>");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});