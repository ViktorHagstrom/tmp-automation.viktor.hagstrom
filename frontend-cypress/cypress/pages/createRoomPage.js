/// <reference types="cypress" />

//Elements
    //Fields
const nRoomTitle = 'Testers Hotel'
const nRoomAssert = 'New Room'
const categoryField=':nth-child(1) > select'
const numberField =':nth-child(2) > input'
const floorField=':nth-child(3) > input'
const avaliableBox='.checkbox'
const priceField=':nth-child(5) > input'
const featuresField=':nth-child(5) > input'
const featBalcony ='[value="balcony"]'
const featEnsuite='[value="ensuite"]'
const featSeaView='[value="sea_view"]'
const featPenthouse='[value="penthouse"]'
const backBtn='[href="/rooms"]'
const savebtn='blue'
    //Inputs
const price ='2500'
const category='Double'
//Actions

function assertNewRoom(cy){
    cy.contains(nRoomAssert)
    cy.title().should('eq',nRoomTitle)
}
function createRoom(cy){
    cy.get(categoryField).select(category)
}
//Export
module.exports = {
    assertNewRoom,
    createRoom

}