const notFoundHandler = (req, _res, next) => {
  const error = new Error("Request Not Found");
  error.status = 404;
  next(error);
};

const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({
    message: "Server error occurd",
  });
};

module.exports = {
    notFoundHandler,
    errorHandler
}