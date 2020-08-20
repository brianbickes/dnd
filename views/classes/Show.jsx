const React = require('react');

class Show extends React.Component {
    render() {
        const { title, description, hitDie, primaryAbility, image, _id} = this.props.classes;
        return (
            <div>
                <h1>{title}</h1>
                        <img src={image} className="Image" height="300px" width="35%" /><br/>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p>{hitDie}</p>
                        <p>{primaryAbility}</p>
                <a href={`/classes/${_id}/edit`}>Edit</a>
            </div>
        )
    }
};

module.exports = Show;