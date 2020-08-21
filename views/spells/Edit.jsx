const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { title, level, description, range, image, _id } = this.props.spells;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/spells/${id}/?_method=PUT`} method="POST">
            <label htmlFor="title">Spell Name:</label><input type="text" name="title" id="title" defaultValue={title} /><br />
            <label htmlFor="level">Spell Level:</label><input type="text" name="level" id="level" defaultValue={level} /> <br />
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /> <br />
            <label htmlFor="range">Spell Range:</label><input type="text" name="range" id="range" defaultValue={range} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /> <br />
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;