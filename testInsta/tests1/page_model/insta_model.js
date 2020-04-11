import {Selector, t} from 'testcafe';

export default class Instagram {
    constructor() {
        this.inputUsername = Selector('input').withAttribute('name','username');
        this.inputPassword = Selector('input').withAttribute('name','password');
        this.buttonLogin = Selector('button').withAttribute('class','sqdOP  L3NKy   y3zKF     ');
        
    }
}