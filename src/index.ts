import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

import indexRoute from "./routes/index.js"
app.use("/api", indexRoute)

app.listen(3000, (err) => {
    if(err) {
        console.error(err)
    }
    console.log(`Server listening on ${3000}`)
})