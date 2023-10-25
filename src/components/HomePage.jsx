import React from 'react';

const HomePage = () => {
    return (
        <div className='container'>
        {/* <h1>Home</h1> */}
    
        <h1>This is Bill... Bill is a Pokemaniac.</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1e%2Fdb%2Fe4%2F1edbe4fa2220b237fb4799281f10393d.png&f=1&nofb=1&ipt=69cfb01399fa602b0731a017c531f3b3fa81e08617d76b736fcd093fb1842b01&ipo=images" />
       <br />
        <h2>Be like Bill and search for your favorite Pokemon on the Search Page!
        <br />
        Save them for later by adding to your Favorites Page!</h2>
        <a href="/game/index.html">Play the Pokemon game</a>
        </div>
    )
}
export default HomePage;
