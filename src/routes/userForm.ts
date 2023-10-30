import { Router } from 'express';
import { postUserForm, getTestForm } from '../controllers/userFormController';
import  { validateFormuser }  from '../validations/userFormValidation';
import path from 'path';

const router =  Router();
router.get('/',
    (req, res) => {
        res.send('Welcome to server').json({msg:'Welcome to server'});
    }
);

router.post('/form',validateFormuser, postUserForm );


export default router;