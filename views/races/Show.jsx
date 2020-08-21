const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, description, traits, image, _id } = this.props.races;
        return (
            <Default>
                <div>
                    <h1>{title}</h1>
                    <img src={image} className="Image" height="300px" width="35%" /><br />
                    <h3> Race Description</h3>
                    <p>{description}</p>
                    <h3>Racial Traits</h3>
                    <p>{traits}</p>
                    <a href={`/races/${_id}/edit`}>Edit</a>
                    {/* <form action={`/classes/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" /> 
                        </form> */}
                </div>
            </Default>
        )
    }
};

module.exports = Show;