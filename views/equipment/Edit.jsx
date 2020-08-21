const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { title, type, description, cost, weight, image, _id } = this.props.equipment;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/equipment/${id}/?_method=PUT`} method="POST">
            <label htmlFor="title">Equipment Name:</label><input type="text" name="title" id="title" defaultValue={title} /><br />
            <label htmlFor="level">Equipment Type:</label><input type="text" name="level" id="type" defaultValue={type} /> <br />
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /> <br />
            <label htmlFor="cost">Cost:</label><input type="text" name="cost" id="cost" defaultValue={cost} /> <br />
            <label htmlFor="weight">Weight:</label><input type="text" name="weight" id="weight" defaultValue={weight} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /> <br />
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;