const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>New Equipment Page</h1>
                    <form action="/equipment" method="POST">

                    <label HTMLFor="title">Equipment Name</label><input type="text" name="title" id="title"></input><br/>
                    <label HTMLFor="type">Equipment Type</label><input type="text" name="type" id="type"></input><br/>
                    <label HTMLFor="description">Description</label><input type="text" name="description" id="description"></input><br/>
                    <label HTMLFor="cost">Cost</label><input type="text" name="cost" id="cost"></input><br/>
                    <label HTMLFor="weight">Weight</label><input type="text" name="text" id="weight"></input><br/>
                        <input type="submit" value="Create New Equipment"></input>
                    </form>
                </div>
            </Default>
        )
    }
};

module.exports = New; 