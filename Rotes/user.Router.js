//16
import express, { Router } from "express"

const routes = express.Router()

import
{
    crateUser,
    FindId,
    putdata,
    deletedata

}from "../controllers/user.controller.js"

routes.post("/",crateUser);
routes.get("/:id",FindId)
routes.put("/:id",putdata)
routes.delete("/:id",deletedata)

export default routes