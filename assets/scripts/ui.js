'use strict'
const store = require('./store.js')
const showWodsTemplate = require('./templates/wod-listing.handlebars')

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

// const getResultsSuccess = function (response) {
//   for (let i = 1; i < response.wods.length; i++) {
// $('#results').append('<li><h4>' + 'Athelete ' + response.wods[i].user.email + '</h4> Metcon ' + response.wods[i].metcon + ', Results <em>' + response.wods[i].result + '</em></li>')
//     //   const getWod = ['Athelete ' + `${response.wods[i].user.email} `, 'metcon ' + `${response.wods[i].metcon} `, ' results ' + `${response.wods[i].result} `]
//     //   // console.log(['Athelete ' + `${response.wods[i].user.email} `, 'metcon ' + `${response.wods[i].metcon} `, ' results ' + `${response.wods[i].result}`])
//     //   $('#results').append`${getWod}`
//   }

const getResultsSuccess = (data) => {
  const showWodsHtml = showWodsTemplate({ wods: data.wods })
  $('#results').html(showWodsHtml)
}

const getResultsFailure = function (response) {
  $('#display-message').html('Try Again')
  $('#display-message').css('color', 'red')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getResultsSuccess,
  getResultsFailure,
  failure
}
