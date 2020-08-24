const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { userclass, description, race, cantrip1, cantrip2, firstlevelspell, equipment, username, image, _id } = this.props.createcharacter;
        return (
            <Default>
                <div class="showCreateCharacter">
                    <h1>{userclass}</h1>
                    <img src={image} className="Image" height="300px" width="200px" /><br />
                    <h3>Backstory</h3>
                    <p>{description}</p>
                    <h3>Race</h3>
                    <p>{race}</p>
                    <h3>1st Cantrip</h3>
                    <p>{cantrip1}</p>
                    <h3>2nd Cantrip</h3>
                    <p>{cantrip2}</p>
                    <h3>Level 1 Spell</h3>
                    <p>{firstlevelspell}</p>
                    <h3>Equipment</h3>
                    <p>{equipment}</p>
                    <h3>Created By:</h3>
                    <p>{username}</p>
                    <a href={`/createcharacter/${_id}/edit`}>Edit</a>
                    {/* <form action={`/classes/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" /> 
                        </form> */}
                        {this.props.children}
                </div>
            </Default>
        )
    }
};

module.exports = Show;