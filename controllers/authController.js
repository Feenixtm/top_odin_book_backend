export function postSignUp(req, res, next) {
    res.json({ message: "Successfully signed in!" });
}

export function postLogin(req, res, next) {
    res.json({ message: "Successfully logged in!" });
}

export function postLogOut(req, res, next) { 
    res.json({ message: "Successfully logged out!" });
}
