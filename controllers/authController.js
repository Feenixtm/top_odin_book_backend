export function postSignUp(req, res, next) {
    res.json({ message: "Successfully signed in!" });
}

export function postLogin(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    res.json({ message: "Successfully logged in!", username: username, password: password });
}

export function postLogOut(req, res, next) { 
    res.json({ message: "Successfully logged out!" });
}
