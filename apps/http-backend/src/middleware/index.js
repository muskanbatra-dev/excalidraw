export function middleware(req, res, next) {
  const authHeader = req.headers["authorization"] ?? "";

  // Extract actual token
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Failed to authenticate token" });
  }
}

