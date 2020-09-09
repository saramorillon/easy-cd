import { Router } from 'express'
import { getAddUser, getDeleteUser, getListUsers, postAddUser } from './controllers/admin'
import { getHome } from './controllers/home'
import { getLogin, getLogout, postLogin } from './controllers/session'
import { hasSession } from './middlewares/session'

export const router = Router()

router.get('/login', getLogin)
router.post('/login', postLogin)

router.use(hasSession())

router.get('/', getHome)
router.get('/logout', getLogout)
router.get('/admin', getListUsers)
router.get('/admin/add-user', getAddUser)
router.post('/admin/add-user', postAddUser)
router.get('/admin/delete-user/:username', getDeleteUser)
