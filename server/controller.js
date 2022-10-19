const path = require('path')

let monkePix = ["https://play-lh.googleusercontent.com/T_vA5l9W1-XYTmgr3gCB2MBd7QmA-iG0wcm09_IFWNB-4gOpnS-tYNEmcalwdixSyw" , 

"https://i.kym-cdn.com/photos/images/original/001/311/208/f98.jpg" , 

"https://upload.wikimedia.org/wikipedia/commons/e/e2/Apeldoorn_Apenheul_zoo_Bonobo.jpg" , 

"https://pbs.twimg.com/profile_images/1281907330410516482/ys5KiAtV_400x400.jpg" , 

"https://i1.sndcdn.com/artworks-De992m2NJWAzZIe1-SR3aHQ-t500x500.jpg" , 

"https://i.pinimg.com/originals/76/ee/83/76ee8382076186750e91398445f22b87.jpg" ]

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'))
    },

    supplyPic: (req, res) => {
        let randomNum = Math.floor(Math.random() * monkePix.length);
        res.status(200).send(monkePix[randomNum]); }

}