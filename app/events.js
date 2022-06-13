const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// let

// const userMove = function () {

// }


// sign up message

function logSubmit(event) {
  log.textContent = 'You have created an account!'
  event.preventDefault()
}

const form = document.getElementById('sign-up-form')
form.addEventListener('submit', myFunction)

function myFunction () {
  alert('You are now registered!')
  event.preventDefault()
}

const signInForm = document.getElementById('log-in-form')
signInForm.addEventListener('submit', myFunction2)

function myFunction2 () {
  alert('You are now signed in :)')
}

const signOutButton = document.getElementById('signOut');
signOutButton.addEventListener('click', myFunction3)

function myFunction3 () {
  alert('You are signed out. Please log in to continue playing game')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
