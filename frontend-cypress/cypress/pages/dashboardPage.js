/// <reference types="cypress" />

//Elements
const userField = '.user'
const user = 'Welcome tester01!' // CHANGE USER HERE
const logOutBtn = '#app > header > div > div > button'
const dashboardTitle = 'Testers Hotel'
const roomsView = '#app > div > div > div:nth-child(1) > a'
const clientsView = '#app > div > div > div:nth-child(2) > a'
const billsView = '#app > div > div > div:nth-child(3) > a'
const reservationsView = '#app > div > div > div:nth-child(4) > a'

//Actions
function dashCheckTitle(cy){
    cy.title().should('eq',dashboardTitle)
}
function dashAssertUser(cy){
cy.get(userField).contains(user)
}
function dashLogOut(cy){
    cy.get(logOutBtn).click()
}
function goToRooms(cy){
    cy.get(roomsView).click()
}

//Export

module.exports ={
dashCheckTitle,
dashAssertUser,
dashLogOut,
goToRooms

}