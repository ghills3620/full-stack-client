'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetResults = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getResults(data)
    .then(ui.getResultsSuccess)
    .catch(ui.getGameFailure)
}

const onCreateMetcon = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createMetcon(data)
    .then(console.log(data))
    .catch(console.log(data))
}

const onDeleteWod = (event) => {
  event.preventDefault()
  const wodId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure you want to delete this workout?')) {
    api.deleteWod(wodId)
      .then(() => onGetResults(event))
      .catch(ui.failure)
  }
}

const onUpdateResults = function (event) {
  event.preventDefault()
  const wodId = $(event.target).closest('section').data('id')
  if (confirm('Update this workout?')) {
    api.updateResults(wodId)
      .then(() => onGetResults(event))
      .catch(ui.failure)
  }
}

const onShowWod = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showWod(data)
    .then(ui.getResultsSuccess)
    .catch(ui.getGameFailure)
}

const addHandlers = () => {
  $('#get-results').on('click', onGetResults)
  $('.content').on('click', 'button', onDeleteWod)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetResults,
  onCreateMetcon,
  addHandlers,
  onDeleteWod,
  onUpdateResults,
  onShowWod
}
