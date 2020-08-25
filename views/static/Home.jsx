const React = require('react');
const Default = require('../components/Default.jsx');

class Home extends React.Component {
    render() {
        return (
            <Default>
                <div class="homepage">
                    <h1 class="home">Welcome to Dungeons and Dragons!</h1>
                    <iframe class="homeVideo" width="560" height="315" src="https://www.youtube.com/embed/BgvHNlgmKro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4>This site aims to help users like you learn about Dungeons and Dragons and inform you how to create your very own character! You hold the controls to your character's destiny and can guide them on a journey to good or take a more sinister approach. It's completely up to you! The choice is yours!</h4>
                    {this.props.children}
                </div>
            </Default>
        )
    }
};

module.exports = Home; 