/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'
import * as newRoomFuncs from '../pages/createRoomPage'



beforeEach(function(){

    indexFuncs.login(cy)
    dashFuncs.dashCheckTitle(cy)
    dashFuncs.dashAssertUser(cy)
});

it('T2: Create room', function(){
        
    dashFuncs.goToRooms(cy)
    roomFuncs.assertRooms(cy)
    roomFuncs.createRoom(cy)
    newRoomFuncs.assertNewRoom(cy)
    newRoomFuncs.createRoom(cy)



})