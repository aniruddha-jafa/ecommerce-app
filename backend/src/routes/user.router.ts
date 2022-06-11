import express from 'express'
import userCtrl from '../controllers/user.controller'

// ----------------------------------------------------------------

const router = express.Router()

router.route('/').get(userCtrl.list).post(userCtrl.create)

router.param('userId', userCtrl.userIdValidator)

router
  .route('/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove)

export default router
