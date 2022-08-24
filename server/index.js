const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const connect = require("./configs/db");
const {
  createExercise,
  getAllExercises,
  getBodyPartExercise,
  getExerciseByTarget,
  getExerciseById,
  getExerciseByEquipment,
} = require("./controllers/exercise.controller");

app.use(express.json());

app.post("/post", createExercise);
app.get("/exercises", getAllExercises);
app.get("/exercises/bodyPart/:bodyPart", getBodyPartExercise);
app.get("/exercises/target/:target", getExerciseByTarget);
app.get("/exercises/id/:id", getExerciseById);
app.get("/exercises/equipment/:equipment", getExerciseByEquipment);
app.listen(9000, () => {
  connect();
  console.log("Listening at 9000");
});
