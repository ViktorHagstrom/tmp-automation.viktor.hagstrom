/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashFuncs from '../pages/dashboardPage'

describe ('Regression test suite', function(){

    beforeEach(function(){

        indexFuncs.login(cy)
        dashFuncs.dashCheckTitle(cy)
        dashFuncs.dashAssertUser(cy)
    });
    afterEach(function(){

        dashFuncs.dashLogOut(cy)
        indexFuncs.indexCheckTitle(cy)
    });

    

it('T2: Create room', function(){
 
    
})




})