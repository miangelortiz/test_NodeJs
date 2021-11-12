/**
 * This module imports and checks the enviorment variables, if something is bad it will halt the program.
 * @author Miguel Angel Ortiz
 * @version 0.1
 */

exports.import = function () {
  require('dotenv').config()
  checkVars()
}

function checkVars () {
  checkENV()
  checkSERVERPort()
}

// #region functions checking every .env var

const checkENV = () => {
  if (process.env.ENV.toLowerCase() !== '') {
    return
  }

  throw Error('Env ENV not valid')
}

const checkSERVERPort = () => {
  if ((process.env.PORT !== null) && (process.env.PORT !== undefined)) {
    return
  }

  throw Error('Env PORT not valid')
}

// #endregion
