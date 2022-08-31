import  { Router } from 'express'

const router = Router()


router.get("/", (require, respond) => {
    respond.render('index');
  });

  
router.get("/about", (require, respond) => {
    respond.render("about");
  });

  

  export default router;