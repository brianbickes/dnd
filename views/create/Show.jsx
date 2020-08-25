const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { userclass, name, description, race, cantrip1, cantrip2, firstlevelspell, equipment, username, image, _id } = this.props.create;
        return (
            <Default>
                <div class="showCreateCharacter">
                    <h1>{name}</h1>
                    <img src={image} className="Image" height="300px" width="30%" /><br />
                    <p>Class</p>
                    <h2>{userclass}</h2>
                    <p>Backstory</p>
                    <h2>{description}</h2>
                    <p>Race</p>
                    <h2>{race}</h2>
                    <p>1st Cantrip</p>
                    <h2>{cantrip1}</h2>
                    <p>2nd Cantrip</p>
                    <h2>{cantrip2}</h2>
                    <p>Level 1 Spell</p>
                    <h2>{firstlevelspell}</h2>
                    <p>Equipment</p>
                    <h2>{equipment}</h2>
                    <p>Created By:</p>
                    <h2>{username}</h2>
                    <a href={`/create/${_id}/edit`}>Edit</a>
                    <form action={`/create/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Character" /> 
                        </form>
                        {this.props.children}
                </div>
            </Default>
        )
    }
};

module.exports = Show;