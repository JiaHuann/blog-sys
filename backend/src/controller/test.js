module.exports.helloWorld = async (req, res, next) => {
    return res.status(200).json({
        status: 1,
        message: 'hello,bro!',
    })
}