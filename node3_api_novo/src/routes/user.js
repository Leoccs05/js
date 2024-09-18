import { Router } from 'express'
import userController from '../controllers/user'

const router = new Router()

//para add usuario mudar rota store de post -> get
router.post('/', userController.store)
router.get('/', userController.index)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router
/*
index ->         lista usuarios           - get
store/crate ->  cria novo usuario         - post
delete ->       apaga um usuario          - delete
show->          mostra usuario            - get
uptade ->       atualiza usuario          - patch ou put
*/
