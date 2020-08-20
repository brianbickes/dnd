const React = require('react');

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Class Page</h1>
                <form action="/classes" method="POST">
                    
                    <label HTMLFor="title">Class name</label><input type="text" name="title" id="title"></input><br/>
                    <label HTMLFor="description">Description</label><input type="text" name="description" id="description"></input><br/>
                    <label HTMLFor="hitDie">Hit Die</label><input type="text" name="hitDie" id="hitDie"></input><br/>
                    <label HTMLFor="primaryAbility">Primary Ability</label><input type="text" name="primaryAbility" id="primaryAbility"></input><br/>
                    <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br/>
                    <input type="submit" value="Create Class"></input>
                </form>
            </div>
        )
    }
};

module.exports = New; 