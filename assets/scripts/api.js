'use strict'

const config = require('./config.js')
const store = require('./store.js')

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

const getResults = function () {
  return $.ajax({
    url: config.apiUrl + '/wods',
    method: 'GET'
  })
}

const createMetcon = function (data) {
  return $.ajax({
    url: config.apiUrl + '/wods',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: data
  })
}

const deleteWod = function (wodId) {
  return $.ajax({
    url: config.apiUrl + '/wods/' + wodId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateResults = function (wodId) {
  return $.ajax({
    url: config.apiUrl + '/wods/' + wodId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const searchWod = function (wodId) {
  return $.ajax({
    url: config.apiUrl + '/wods/' + wodId,
    method: 'GET'
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getResults,
  createMetcon,
  deleteWod,
  searchWod,
  updateResults
}
