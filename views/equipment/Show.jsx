const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, type, description, damage, weight, image, _id } = this.props.equipment;
        return (
            <Default>
                <div class="container">
                    <h1 class="descriptor">{title}</h1>
                    <img src={image} className="Image" height="300px" width="300px" /><br />
                    <h3 class="type">Equipment Type</h3>
                    <p>{type}</p>
                    <h3 class="descriptor"> Equipment Description</h3>
                    <p>{description}</p>
                    <h3 class="descriptor">Damage</h3>
                    <p>{damage}</p>
                    <a href={`/equipment/${_id}/edit`}>Edit</a>
                    {/* <form action={`/classes/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" /> 
                        </form> */}
                </div>
            </Default>
        )
    }
};

module.exports = Show;