const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                    <title>Dungeons and Dragons</title>
                </head>
                <body>
                    <div class="homeContainer">
                    <img class="titleImage" src="https://i.imgur.com/73abYGq.png" height="230" width="100%"></img>
                    <nav class="navBar">
                        <a class="dropbtn" href="/">Home</a>
                        <div class="dropdown">
                            <button class="dropbtn">Character Information</button>
                            <div class="dropdown-content">
                                <a href="/classes">Classes</a>
                                <a href="/races">Races</a>
                                <a href="/spells">Spells</a>
                                <a href="/equipment">Weapons</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Create</button>
                            <div class="dropdown-content">
                                <a href="/create">User Created Characters</a>
                                <a href="/create/new">Create Your Own Character</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Resources</button>
                            <div class="dropdown-content">
                                <a href="https://dnd.wizards.com/">Official Dungeons and Dragons Website</a>
                                <a href="https://www.dndbeyond.com/">D and D Beyond</a>
                                <a href="https://roll20.net/">Roll 20 - Play Online</a>
                            </div>
                        </div>
                    </nav>

                    {this.props.children}
                    <footer>
                        <></>
                    </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default;