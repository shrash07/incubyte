const app = require("express")();

const PORT = process.env.PORT || 8000;

const cors = require("cors");

const solveRouter = require("./routes/solve");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());
app.use("/solve", solveRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
