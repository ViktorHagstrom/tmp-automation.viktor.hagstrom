/// <reference types="cypress" />

//Elements
const roomTitle = 'Testers Hotel'
const roomHeader = ''
const createRoomBtn = 'h2 > .btn'
const roomBackBtn = ''

//Actions
function assertRooms(cy){
cy.title().should('eq',roomTitle)
}

function createRoom(cy){
    cy.get(createRoomBtn).click()
}

//Exports
module.exports = {
    assertRooms,
    createRoom
}