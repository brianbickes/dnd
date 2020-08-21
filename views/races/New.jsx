const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render(){
        return (
            <Default>
            <div>
                <h1>New Race Page</h1>
                <form action="/races" method="POST">
                    
                    <label HTMLFor="title">Class name</label><input type="text" name="title" id="title"></input><br/>
                    <label HTMLFor="description">Description</label><input type="text" name="description" id="description"></input><br/>
                    <label HTMLFor="traits">Racial Traits</label><input type="text" name="traits" id="traits"></input><br/>
                    <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br/>
                    <input type="submit" value="Create Race"></input>
                </form>
            </div>
            </Default>
        )
    }
};

module.exports = New; 