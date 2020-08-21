const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { title, description, traits, image, _id } = this.props.races;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/races/${id}/?_method=PUT`} method="POST">
            <label htmlFor="title">Race Name:</label><input type="text" name="title" id="title" defaultValue={title} /><br />
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /> <br />
            <label htmlFor="traits">Racial Traits:</label><input type="text" name="traits" id="traits" defaultValue={traits} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /> <br />
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;