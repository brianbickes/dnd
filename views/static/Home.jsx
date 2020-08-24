const React = require('react');
const Default = require('../components/Default.jsx');

class Home extends React.Component {
    render() {
        return (
            <Default>
                <div class="homepage">
                    <h1>Welcome to Dungeons and Dragons!</h1>
                    <iframe class="homeVideo" width="560" height="315" src="https://www.youtube.com/embed/BgvHNlgmKro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Default>
        )
    }
};

module.exports = Home; 