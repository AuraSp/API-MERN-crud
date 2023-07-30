const mongoose = require("mongoose");

//Convert Date format to only date without time
const Date = {
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
};
// DB schema
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  birthdate: {
    type: Date,
  }, 
  program: {
    type: String,
  },
  town: {
    type: String,
  },
  group: {
    type: String,
  },
});

const Students = new mongoose.model("Students", studentsSchema);

// Test prototype
// const testStudents = new Students({
//   name: "Joana",
//   surname: "Baldyte",
//   birthdate: "1999-01-01",
//   program: "JavaScript",
//   town: "Kaunas",
//   group: "JS-1",
// });

// testStudents.save();

module.exports = Students;
