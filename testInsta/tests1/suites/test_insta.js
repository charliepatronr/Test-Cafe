import InstagramPage from '../page_model/insta_model';
const page = new InstagramPage();

fixture `Example page tests`
    .page `https://www.instagram.com/`;

    
test('input name', async t =>{
    const username = 'fofawam582@smlmail.com';
    const password = 'GenericPassword1';
    await t
        .typeText(page.inputUsername, username)
        .typeText(page.inputPassword, password)
        .click(page.buttonLogin)
        .wait(8000)


});