const validate = (req, res, next) => {

  if (!req.body) {
    return res.status(400).json({
      message: "Request body missing"
    });
  }

  next();
};

module.exports = validate;