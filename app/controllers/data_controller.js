/**
 * Data controller
 * Author: Miguel Angel Ortiz
 */
const logger = require('../utils/logger')
const id = require('../data/validateAuth')

/**
* Get data
* @param {req} req data
* @param {res} res data
*/
exports.getData = async (req, res) => {
  if (!req.headers.id) {
    res.status(403).send({ message: 'The request does not have an authorisation header.' })
  }

  try {
    logger.debug('Receiving authentication')
    const dataAuth = await id.validateAuth(req.headers.id)
    const currentDate = Math.floor(Date.now() / 1000)
    if (dataAuth) {
      if (req.headers.id === dataAuth.id) {
        if (currentDate - dataAuth.expiration <= 0) {
          const timeLeft = dataAuth.expiration - currentDate
          logger.debug('Successful validation for user id: %j', dataAuth.id)
          res.status(200).send({ message: `Successful validation. Time left: ${timeLeft}` })
        } else {
          res.status(403).send({ message: 'Your authentication has expired' })
        }
      }
    } else {
      res.status(403).send({ message: 'Bad authentication' })
    }
  } catch {
    res.sendStatus(400)
  }
}
