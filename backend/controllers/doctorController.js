import doctorModel from "../models/doctorModel.js";

// 🔄 Change Availability of Doctor
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const doctor = await doctorModel.findById(docId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    doctor.available = !doctor.available;
    await doctor.save();

    res.status(200).json({
      success: true,
      message: "Availability status updated successfully",
    });
  } catch (error) {
    console.error("Error in changeAvailability:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// 📋 Get All Doctors List (excluding password and email)
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password -email");

    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.error("Error in doctorList:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export { changeAvailability, doctorList };
