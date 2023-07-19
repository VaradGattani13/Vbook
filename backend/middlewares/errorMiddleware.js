
// Next matlb next
const errorMiddleware = (err,req,res,next) => {
    // Set status code
    const errorStatusCode=res.statusCode===200?500:rs.statusCode;
    res.status(errorStatusCode);
    res.json({
        message:err.message,

    })
}

module.exports={errorMiddleware}