const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { userclass, race, spells, equipment, description, image, _id } = this.props.createcharacter;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/classes/${id}/?_method=PUT`} method="POST">
            <label htmlFor="class">Class Name:</label><input type="text" name="class" id="class" defaultValue={userclass} /><br />
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /> <br />
            <label htmlFor="race">Race:</label><input type="text" name="race" id="race" defaultValue={race} /> <br />
            <label htmlFor="spells">Spells:</label><input type="text" name="spells" id="spells" defaultValue={spells} /> <br />
            <label htmlFor="equipment">Equipment:</label><input type="text" name="equipment" id="equipment" defaultValue={equipment} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /> <br />
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;