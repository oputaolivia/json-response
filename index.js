const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.json({
        "slackUsername":"OliviaOputa",
        "backend":true,
        "age":20,
        "bio": "A Backend Developer, with less than a year experience in Node.js"
    })
})
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})
