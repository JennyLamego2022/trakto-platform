import axios from "axios";

const fs = require("fs")

const collection = JSON.parse(fs.readFileSync("../API/DesafioTrakto.postman_collection.json"))

const options = {
  method: "GET",
  url: "https://api.trakto.io/auth/signin",
  headers: {
    "content-type": "application/json",
  }
}
