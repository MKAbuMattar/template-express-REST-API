import { verifySignUp } from '../middlewares'
import { signup, signin, refreshToken } from '../controllers/auth.controller'

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    )
    next()
  })

  app.post(
    '/api/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    signup,
  )

  app.post('/api/auth/signin', signin)

  app.post('/api/auth/refreshtoken', refreshToken)
}
