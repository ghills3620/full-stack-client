'use strict'
const store = require('./store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').show()
  $('#sign-out-button').removeClass('hidden')
  $('#change-password-form').show()
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('Change password succesful')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#display-message').html('Password Failed to change, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#display-message').html('Signout Succesful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('#message').addClass('hidden')
  $('#change-password-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').hide()
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
