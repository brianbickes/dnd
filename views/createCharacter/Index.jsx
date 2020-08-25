const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default>
                
                    {
                        this.props.createcharacter.map((createCharacter) => {
                            return (
                                <div key={createCharacter._id}>
                                    <div class="createCharacterClass">
                                        <span><img src={createCharacter.image} className="Image" height="300px" width="30%" /></span><br />
                                        <h1><a href={`/createcharacter/${createCharacter._id}`}>{createCharacter.name}</a></h1>
                            <h2>Created by {createCharacter.username}</h2>
                                    </div>
                                    {this.props.children}
                                    {/* <h3> Character Description</h3>
                        <p>{classes.description}</p>
                        <h3>Hit Die</h3>
                        <p>{classes.hitDie}</p>
                        <h3>Primary Abilities</h3>
                    <p>{classes.primaryAbility}</p> */}
                                    {/* <a href={`/classes/${classes._id}/edit`}>Edit this Class {classes.createdAt.toString()}</a> */}
                                    {/* <form action={`/classes/${classes._id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" /> 
                        </form> */}
                                </div>)
                        })
                    }
                
            </Default>
        )
    }
}
module.exports = Index;