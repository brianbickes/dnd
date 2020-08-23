const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { userclass, description, race, spells, equipment, image, _id } = this.props.createcharacter;
        return (
            <Default>
                <div class="showCreateCharacter">
                    <h1>{userclass}</h1>
                    <img src={image} className="Image" height="300px" width="200px" /><br />
                    <h3> Character Description</h3>
                    <p>{description}</p>
                    <h3>Race</h3>
                    <p>{race}</p>
                    <h3>Spells</h3>
                    <p>{spells}</p>
                    <h3>Equipment</h3>
                    <p>{equipment}</p>
                    <a href={`/classes/${_id}/edit`}>Edit</a>
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