
const noMatchMiddleware = (req, res, next)=>{
    res.status(404)
        .json({
            code:0,
            message:'router url not found'
        })
}

module.exports = noMatchMiddleware