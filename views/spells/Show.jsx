const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, level, description, range, image, _id } = this.props.spells;
        return (
            <Default>
                <div class="container">
                    <h1 class="descriptor">{title}</h1>
                    <img src={image} className="Image" height="300px" width="35%" /><br />
                    <h3 class="level">Spell Level</h3>
                    <p>{level}</p>
                    <h3 class="descriptor"> Spell Description</h3>
                    <p>{description}</p>
                    <h3 class="descriptor">Spell Range</h3>
                    <p>{range}</p>
                    <a href={`/spells/${_id}/edit`}>Edit</a>
                    {/* <form action={`/classes/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" /> 
                        </form> */}
                </div>
            </Default>
        )
    }
};

module.exports = Show;