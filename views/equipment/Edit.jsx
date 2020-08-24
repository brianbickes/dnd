const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { title, type, description, damage, weight, image, _id } = this.props.equipment;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/equipment/${id}/?_method=PUT`} method="POST">
            <label htmlFor="title">Weapon Name:</label><input type="text" name="title" id="title" defaultValue={title} /><br />
            <label htmlFor="level">Weapon Type:</label><input type="text" name="level" id="type" defaultValue={type} /> <br />
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /> <br />
            <label htmlFor="damage">Damage:</label><input type="text" name="damage" id="damage" defaultValue={damage} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /> <br />
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;