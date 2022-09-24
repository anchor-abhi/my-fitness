const express = require("express");
const app = express();
var cors = require("cors");
const send_email=require("./utils/sendmail")
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

app.post("/portfolio/connect",(req, res)=>{
  try{
    const {name, email, message} = req.body;
    send_email(name, email, message)
    res.send("Email sent successfully")
  }
  catch(e){
    res.send(e.message)
  }
} )

require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  connect();
  console.log(`Listening at ${PORT}`);
});
