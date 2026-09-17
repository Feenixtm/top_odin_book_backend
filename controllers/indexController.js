export function getIndex(req, res, next) {
    console.log("getIndex is running...");
    res.json({ message: "Sent from getIndex!" });
}
