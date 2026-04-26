export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    success: false,
    message: err.message,
    stack: err.stack, // Temporarily show stack to debug the 500 error
  })
}