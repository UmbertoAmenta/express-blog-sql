const routeNotFound = (req, res, next) => {
    res.status(404).json({
        error: "Not found",
        message: "Non-existent route"
    })
}

module.exports = routeNotFound