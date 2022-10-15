import hkdf from '@panva/hkdf'
import { EncryptJWT, JWTPayload } from 'jose'

/**
 * @param {String} secret
 */

async function getDerivedEncryptionKey(secret) {
  return await hkdf(
    'sha256',
    secret,
    '',
    'NextAuth.js Generated Encryption Key',
    32
  )
}

/**
 * @param {JWTPayload} token
 * @param {String} secret
 * @returns {Promise<string>}
 */

export async function encode(token, secret) {
  const maxAge = 30 * 24 * 60 * 60 // 30 days
  const encryptionSecret = await getDerivedEncryptionKey(secret)
  return await new EncryptJWT(token)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setIssuedAt()
    .setExpirationTime(Math.round(Date.now() / 1000 + maxAge))
    .setJti('test')
    .encrypt(encryptionSecret)
}

/**
 * @param {JWTPayload} userObj
 */
function login(userObj) {
  cy.wrap(null)
    .then(() => {
      return encode(userObj, Cypress.env('NEXT_AUTH_SECRET'))
    })
    .then((encryptedToken) =>
      cy.setCookie('next-auth.session-token', encryptedToken)
    )
}

function logout() {
  cy.wrap(null).then(() => {
    cy.clearCookies()
  })
}

Cypress.Commands.add('login', login)
Cypress.Commands.add('logout', logout)
