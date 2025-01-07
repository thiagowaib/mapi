const getAuth = (req) => {
    return req?.headers?.auth || null;
}

const authAdmin = (req, res, next) => {
    const auth = getAuth(req);
    if(process?.env?.ADMIN_KEY && auth === process.env.ADMIN_KEY) {
        next();
    } else {
        res.status(403).send()
    }
}

const authClient = (req, res, next) => {
    const auth = getAuth(req);
    if(process?.env?.CLIENT_KEY && (auth === process.env.ADMIN_KEY || auth === process.env.CLIENT_KEY)) {
        next();
    } else {
        res.status(403).send()
    }
}

module.exports = {authAdmin, authClient};