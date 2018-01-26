var db = require('./connection');

function getAll(){
  return db('users').select('*')
}
function getUserData(user){
  return db('users').where({username: user.username, password: user.password})
}

function createNewUser(data){
  return db('users').insert(data, '*')
}

module.exports = {
  getUserData,
  createNewUser,
  getAll,
}
