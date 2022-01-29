



const midelware = (req, res, next) => {
    let date = new Date();
    let numberOfDate = date.getDay();
    let time = date.getHours();
    if (!((time >= 9 && time < 17) && (date >= 1 && date <=5))) {
        return res.status(400).json({ msg: "sorry we're closed rn" })
    }

    next();

}

module.exports = midelware