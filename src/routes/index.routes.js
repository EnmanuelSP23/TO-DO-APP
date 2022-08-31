import  { Router } from 'express'

const router = Router()


router.get("/", (require, respond) => {
    respond.render('index.hbs');
  });

  
router.get("/about", (require, respond) => {
    respond.render("about.hbs");
  });

  

  export default router;