const logger = require('../utils/logger')
const dataAuth = require('./validateAuth.json')

exports.validateAuth = async (id) => {
  for await (const auth of dataAuth) {
    if (id === auth.id) {
      logger.debug('Validating authentication for user id: %j', auth.id)
      return auth
    }
  }
}
