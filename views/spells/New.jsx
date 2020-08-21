const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>New Spell Page</h1>
                    <form action="/spells" method="POST">

                    <label HTMLFor="title">Spell Name</label><input type="text" name="title" id="title"></input><br/>
                    <label HTMLFor="level">Spell Level</label><input type="text" name="level" id="level"></input><br/>
                    <label HTMLFor="description">Description</label><input type="text" name="description" id="description"></input><br/>
                    <label HTMLFor="range">Spell Range</label><input type="text" name="range" id="range"></input><br/>
                    <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br/>
                        <input type="submit" value="Create New Spell"></input>
                    </form>
                </div>
            </Default>
        )
    }
};

module.exports = New; 