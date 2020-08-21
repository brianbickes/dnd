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
                    <nav class="navBar">
                        <a href="/">Home</a>
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