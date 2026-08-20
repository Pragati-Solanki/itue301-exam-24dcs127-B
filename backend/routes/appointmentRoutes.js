const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");

const doctors = [
  {
    id: 1,
    name: "Dr. Mehta",
    specialisation: "Cardiology",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Shah",
    specialisation: "Dermatology",
    available: false,
  },
];

router.get("/doctors", (req, res) => {
  res.status(200).json(doctors);
});

router.get("/appointments", async (req, res, next) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    next(err);
  }
});

router.post("/appointments", async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
});

module.exports = router;