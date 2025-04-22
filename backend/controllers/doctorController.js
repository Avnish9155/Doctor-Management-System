import doctorModel from '../models/doctorModel.js';

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find(); // MongoDB से सभी doctors को fetch करो
    res.status(200).json(doctors); // Success response के साथ doctors की list भेजो
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ error: 'Doctors को fetch करने में error' }); // Error response भेजो
  }
};

export { getAllDoctors };