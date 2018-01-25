var db = require('./connection');

function checkIfExists(user){
  return db('users').where('username', user.username, 'password', user.password)
}

function signIn(user){
  return db('users').where('username', username)
}

function signUp(data){
  return db('users').insert(data, '*')
}

module.exports = {
  checkIfExists,
  signIn,
  signUp,
}
