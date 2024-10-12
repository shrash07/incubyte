const app = require("express")();

const PORT = process.env.PORT || 3000;

const solveRouter = require("./routes/solve");

app.use("/solve", solveRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
