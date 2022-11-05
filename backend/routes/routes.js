import express from 'express';
import { home,
         ladoCuadrado    
} from '../controllers/indexControlador.js'

const router = express.Router();

// verbos http - rest
// get post put delete
router.get('/home', home);
router.get('/lado-cuadro/:numero', ladoCuadrado);

export default router;