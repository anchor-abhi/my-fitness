const exerciseModel = require("../models/exercise.model");

const createExercise = async (req, res) => {
  try {
    const exercise = await exerciseModel.create(req.body);
    return res.status(201).send(exercise);
  } catch (e) {
    res.send(e.message);
  }
};

const getAllExercises = async (req, res) => {
  try {
    const exercises = await exerciseModel.find().lean().exec();
    return res.status(201).send(exercises);
  } catch (e) {
    res.send(e.message);
  }
};

const getBodyPartExercise = async (req, res) => {
  try {
    console.log(req.params.bodyPart);
    const exercises = await exerciseModel.find({
      bodyPart: req.params.bodyPart,
    });

    return res.status(201).send(exercises);
  } catch (e) {
    res.send(e.message);
  }
};

const getExerciseById = async (req, res) => {
  try {
    console.log(req.params);
    const exercises = await exerciseModel.find({
      id: req.params.id,
    });

    return res.status(201).send(exercises);
  } catch (e) {
    res.send(e.message);
  }
};

const getExerciseByTarget = async (req, res) => {
  try {
    const exercises = await exerciseModel.find({
      target: req.params.target,
    });

    return res.status(201).send(exercises);
  } catch (e) {
    res.send(e.message);
  }
};

const getExerciseByEquipment = async (req, res) => {
  try {
    const exercises = await exerciseModel.find({
      equipment: req.params.equipment,
    });

    return res.status(201).send(exercises);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  createExercise,
  getAllExercises,
  getBodyPartExercise,
  getExerciseByEquipment,
  getExerciseById,
  getExerciseByTarget,
};
