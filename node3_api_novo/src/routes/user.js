import { Router } from 'express'
import userController from '../controllers/user'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

//para add usuario mudar rota store de post -> get
router.get('/', userController.index); // Lista usuario
router.get('/:id', userController.show); // Lista usuario

router.get('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router

/*
index         ->  lista usuarios       - get
store/crate   ->  cria novo usuario    - post
delete        ->  apaga um usuario     - delete
show          ->  mostra usuario       - get
uptade        ->  atualiza usuario     - patch ou put
*/
