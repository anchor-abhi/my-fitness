const exerciseModel = require("./models/exercise.model");
const axios = require("axios");
const connect = require("./configs/db");

const getExercises = async () => {
  await connect();
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": "9367c8d3f8msh5bd8c23bceb3e19p17e65djsnfa6265a34c1a",
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
