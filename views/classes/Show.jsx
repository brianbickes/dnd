const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, description, hitDie, primaryAbility, image, _id } = this.props.classes;
        return (
            <Default>
                <div class="showClass">
                    <h1>{title}</h1>
                    <img src={image} className="Image" height="300px" width="200px" /><br />
                    <h3> Character Description</h3>
                    <p>{description}</p>
                    <h3>Hit Die</h3>
                    <p>{hitDie}</p>
                    <h3>Primary Abilities</h3>
                    <p>{primaryAbility}</p>
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