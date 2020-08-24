const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>New Weapon Page</h1>
                    <form action="/equipment" method="POST">

                    <label HTMLFor="title">Equipment Name</label><input type="text" name="title" id="title"></input><br/>
                    <label HTMLFor="type">Equipment Type</label><input type="text" name="type" id="type"></input><br/>
                    <label HTMLFor="description">Description</label><input type="text" name="description" id="description"></input><br/>
                    <label HTMLFor="damage">Damage</label><input type="text" name="damage" id="damage"></input><br/>
                
                    <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br/>
                        <input type="submit" value="Create New Equipment"></input>
                    </form>
                </div>
            </Default>
        )
    }
};

module.exports = New; 