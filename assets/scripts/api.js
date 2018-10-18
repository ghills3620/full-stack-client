'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const changePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const newGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }
//
// const getGames = function (data) {
//   return $.ajax({
//     url: config.apiUrl + `/games/`,
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'GET'
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
  // newGame,
  // getGames
}
