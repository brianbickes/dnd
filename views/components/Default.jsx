const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                    <title>Dungeons and Dragons</title>
                </head>
                <body>
                <img class="titleImage" src="https://i.imgur.com/73abYGq.png" height="230" width="100%"></img>
                    <nav class="navBar">
                        <a class="nav" href="/">Home</a>
                        <a href="/classes">Classes</a>
                        <a href="/races">Races</a>
                        <a href="/classes/new">Create</a>
                    </nav>
                    
                    {this.props.children}
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;