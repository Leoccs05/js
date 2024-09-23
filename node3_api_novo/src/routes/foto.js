import { Router } from 'express'
import loginRequired from '../middlewares/loginRequired'
import fotoController from '../controllers/foto'

const router = new Router()
//varios arquivos
router.post('/', loginRequired, fotoController.store)

export default router
