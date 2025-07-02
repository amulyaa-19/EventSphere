const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const serviceAccount = require("../firebase-service-account.json");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Unauthorized, please provide a valid token",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized, please provide a valid token",
    });
  }
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized: No token",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.userId = decodedToken.uid;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized: Invalid token",
    });
  }
};

module.exports = {
  authMiddleware,
  verifyFirebaseToken,
};
