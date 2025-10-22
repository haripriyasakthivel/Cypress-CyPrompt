// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Prevent Cypress from failing tests on unexpected uncaught exceptions
// Guard the call in case this file is evaluated in an environment where
// the `Cypress` global isn't the usual runner object (e.g. some editors
// or tooling that loads files outside the Cypress browser runner).
if (typeof Cypress !== 'undefined' && typeof Cypress.on === 'function') {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
} else {
    // eslint-disable-next-line no-console
    console.warn('Cypress.on is not available in this environment — skipping uncaught:exception handler')
}

// Generate random test credentials and expose via Cypress.env
// so tests can use them as needed: Cypress.env('username') etc.
(() => {
    const randomString = (length = 8) =>
        Math.random().toString(36).slice(2, 2 + length)

    const username = `user${randomString(6)}`
    // Generate a password that starts with an uppercase letter,
    // followed by random chars, numbers and a punctuation char
    const upperChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)) // A-Z
    const password = `${upperChar}${randomString(5)}${Math.floor(Math.random() * 90 + 10)}!`
    const email = `${username}@example.com`

    // Set as Cypress environment variables at runtime
    // Tests can access via Cypress.env('username') etc.
    if (typeof Cypress !== 'undefined' && Cypress.env) {
        Cypress.env('username', username)
        Cypress.env('password', password)
        Cypress.env('email', email)
    }
})()