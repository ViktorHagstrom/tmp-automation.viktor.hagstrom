/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'

describe ('Regression test suite', function(){

it('Is a test', function(){

    indexFuncs.login(cy)
})


})