import axios from "axios";
import { Router, Request, Response, response } from "express";
import { getId } from "../logic/UsersEmployee";



const router = Router();

router.get("/",  (req: Request, res: Response): void => {
  getId().then(result => {
    res.status(200).send(result.data.data);
  });  
  
});

export { router };

