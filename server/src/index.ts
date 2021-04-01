import express from "express"
import { config } from "dotenv"
config()

const app = express()

app.get("/", (req, res) => {
  res.send({
    msg: "ok"
  })
})

app.listen(4000, () => {
  console.log("server started")
})
