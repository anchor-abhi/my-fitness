const exerciseModel = require("./models/exercise.model");
const axios = require("axios");
const connect = require("./configs/db");

console.log(process.env);

const getExercises = async () => {
  await connect();
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(async function (response) {
      await exerciseModel.insertMany(response.data);
      process.exit(0);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// getExercises();
