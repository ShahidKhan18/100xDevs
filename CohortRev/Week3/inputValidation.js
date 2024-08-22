const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

const schema = zod.array(zod.number()).nonempty();

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(400).json({ error: "Invalid input" });
  } else {
    res.send(`You have ${response.data.length} kidneys`);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
 