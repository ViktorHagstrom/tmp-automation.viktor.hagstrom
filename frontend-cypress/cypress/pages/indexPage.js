/// <reference types="cypress" />



//Elements
const baseUrl = 'http://localhost:3000/login'
const indexTitle = 'Testers Hotel'
const checkPhrase = 'Login'
const userNameInput = '#app > div > form > div:nth-child(1) > input[type=text]'
const userPassInput = '#app > div > form > div:nth-child(2) > input[type=password]'
const loginBtn = '#app > div > form > div.field.action > button'
const userName = 'tester01'
const userPass = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

//Actions

function indexCheckTitle(cy){
    cy.title().should('eq',indexTitle)
}
function login(cy){
    cy.visit(baseUrl)
    indexCheckTitle(cy)
    cy.contains(checkPhrase)
    cy.get(userNameInput).type(userName)
    cy.get(userPassInput).type(userPass)
    cy.get(loginBtn).click()
}
//Export
module.exports={
indexCheckTitle,
login,
baseUrl
}