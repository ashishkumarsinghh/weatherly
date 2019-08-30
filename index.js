const express = require("express")

const app = express()

app.use(express.static("public"))
app.set('view engine', 'pug')

app.get("/", function (req, res) {
    res.render(__dirname + "/public/pug/index")
})

app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log("Whoops ! Error.")
    }
    console.log("Yayy...Weatherly is running at http://localhost:3000/")
})