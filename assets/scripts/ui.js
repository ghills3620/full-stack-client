'use strict'
const store = require('./store.js')
const showWodsTemplate = require('./templates/wod-listing.handlebars')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').hide()
  $('#results').empty()
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
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
  $('#update-results').show()
  $('#create-metcon').show()
  $('#sign-out-button').show()
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#results').empty()
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('Change password succesful')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
}

const changePasswordFailure = function (response) {
  $('#display-message').html('Password Failed to change, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
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
  $('#update-results').hide()
  $('#create-metcon').hide()
  $('#sign-out-button').hide()
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#update-results').hide()
  $('#create-metcon').hide()
  $('#sign-out-button').hide()
  $('#search-wod').trigger('reset')
  $('#results').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#results').empty()
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
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
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

const getResultsFailure = function (response) {
  $('#display-message').html('Try Again')
  $('#display-message').css('color', 'red')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

const failure = (error) => {
  console.error(error)
}

const createMetconFailure = function (data) {
  $('#display-message').html('Workout input failed')
}

const showWodSuccess = (data) => {
  const searchWodHtml = showWodsTemplate({ wods: data })
  $('#results').html(searchWodHtml)
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

const getGameFailure = function (data) {
  $('#display-message').html('Enter vaild WOD Id')
  $('#display-message').css('color', 'red')
  $('#square').addClass('hidden')
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
  showWodSuccess,
  failure,
  createMetconFailure,
  getGameFailure
}

// production
