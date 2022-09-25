
// auth middleware loggedin?
function authMiddleware(req, res, next) {
    const loggedIn = false
    if (loggedIn) {
        return next()
    }
    next(new Error('invalid credit'))
}
module.exports = authMiddleware 