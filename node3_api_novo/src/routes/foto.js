import { Router } from 'express'

import fotoController from '../controllers/foto'

const router = new Router()
//varios arquivos
router.post('/', fotoController.store)

export default router
