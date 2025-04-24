import jwt from "jsonwebtoken";

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again.",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Put userId directly on the request object
    req.userId = token_decode.id;

    next();
  } catch (error) {
    console.log("Auth Error:", error);
    res.json({ success: false, message: "Invalid or expired token." });
  }
};

export default authUser;
