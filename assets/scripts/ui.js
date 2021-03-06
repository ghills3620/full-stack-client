'use strict'
const store = require('./store.js')
const showWodsTemplate = require('./templates/wod-listing.handlebars')
const getFormFields = require('../../lib/get-form-fields.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful').fadeIn()
  $('#display-message').css('color', 'green')
  $('#display-message').fadeOut(4000)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').hide()
  $('#results').empty()
  $('#get-results').show()
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again').fadeIn()
  $('#display-message').css('color', 'red')
  $('#display-message').fadeOut(4000)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
  $('#get-results').show()
}

const signInSuccess = function (response) {
  $('#display-message').html('Sign in successful').fadeIn()
  $('#display-message').css('color', 'green')
  $('#display-message').html('Sign in successful').fadeOut(4000)
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
  $('#get-results').show()
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again').fadeIn()
  $('#display-message').css('color', 'red')
  $('#display-message').fadeOut(4000)
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
  $('#get-results').show()
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('Change password succesful').fadeIn()
  $('#display-message').css('color', 'green')
  $('#display-message').fadeOut(4000)
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
  $('#get-results').show()
}

const changePasswordFailure = function (response) {
  $('#display-message').html('Password Failed to change, please try again').fadeIn()
  $('#display-message').css('color', 'red')
  $('#display-message').fadeOut(4000)
  $('#change-password-form').trigger('reset')
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#results').empty()
  $('#get-results').show()
}

const signOutSuccess = function (response) {
  $('#display-message').html('Signout Succesful').fadeIn()
  $('#display-message').css('color', 'green')
  $('#display-message').fadeOut(4000)
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
  store.user = undefined
  if (store.user === undefined) {
    $('section[data-id] button').hide()
  }
  $('#get-results').show()
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again').fadeIn()
  $('#display-message').css('color', 'red')
  $('#display-message').fadeOut(4000)
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#get-results').show()
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
  if (store.user) {
    for (let i = 0; i < data.wods.length; i++) {
      if (store.user.id !== data.wods[i].user.id) {
        $('section[data-id="' + data.wods[i].id + '"] button').hide()
      }
    }
  } else if (store.user === undefined) {
    $('.delete').hide()
  }
  $('#get-results').hide()
}

const getResultsFailure = function (response) {
  $('#display-message').html('Try Again').fadeIn()
  $('#display-message').css('color', 'red')
  $('#display-message').fadeOut(4000)
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#get-results').show()
}

const removeWodFailure = function () {
  // if (store.user.token === false) {
  //   $('#display-message').html('Please sign in').fadeToggle(2000)
  //   $('#display-message').css('color', 'red')
  // }
  $('#display-message2').html('Select a workout that is yours').fadeIn()
  $('#display-message2').css('color', 'red')
  $('#display-message2').fadeOut(4000)
  $('#update-results').trigger('reset')
  $('#create-metcon').trigger('reset')
  $('#sign-out-button').trigger('reset')
  $('#search-wod').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#get-results').show()
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
  $('#get-results').show()
  if (store.user) {
    if (store.user.id !== data.wod.user.id) {
      $('section[data-id="' + data.wod.id + '"] button').hide()
    }
  } else if (store.user === undefined) {
    $('.delete').hide()
  }
  $('#get-results').hide()
}

const getGameFailure = function (data) {
  $('#display-message').html('Enter vaild WOD Id').fadeIn()
  $('#display-message').css('color', 'red')
  $('#display-message').fadeOut(4000)
  $('#square').addClass('hidden')
  $('#search-wod').trigger('reset')
}

const noUserFailure = function (data) {
  $('#display-message2').html('Please Sign In to update your results').fadeIn()
  $('#display-message2').css('color', 'red')
  $('#display-message2').fadeOut(4000)
  $('#square').addClass('hidden')
}
//
// const beforeLogin = function (data) {
//   console.log(store.user)
//   if (store.user) {
//     $('section[data-id] button').hide()
//   }
// }

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
  createMetconFailure,
  getGameFailure,
  removeWodFailure,
  noUserFailure
  // beforeLogin
}

// production
