const { IgApiClient } = require('instagram-private-api');
const { config } = require('dotenv');

const ig = new IgApiClient();

ig.state.generateDevice('ayoub_boulbaz');

const run = async() => {

};

const getLatestPostLikers = async() => {
    await ig.feed.tags.name('softwareengineer');
};

const ig_login = async() => {
    console.log("😎 {Hello From the coolest bot in the world} 😎");
    await ig.simulate.preLoginFlow();
    const loggedInUser = await ig.account.login('ayoub_boulbaz', '');
    await ig.simulate.postLoginFlow();
    console.log(loggedInUser.full_name);
};

module.exports = {
    ig_login: ig_login,
    run: run,
    getLatestPostLikers: getLatestPostLikers,

}