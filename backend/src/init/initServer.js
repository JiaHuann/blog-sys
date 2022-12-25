const initServer = async (app) => {
    return new Promise((resolve, reject) => {
        const PORT = process.env.PORT || 8080 //从.env引入或者默认
        app
            .listen(PORT, () => {
                console.log(`Server is running now on http://localhost:${PORT}`);
                resolve()
            })
            .on('error', (error) => {
                console.log(error);
                reject()
            })
    })
}

module.exports = initServer