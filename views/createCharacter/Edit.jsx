const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { userclass, race, cantrip1, cantrip2, firstlevelspell, equipment, description, image, username, _id } = this.props.createcharacter;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/classes/${id}/?_method=PUT`} method="POST">
            <label htmlFor="class">Class Name:</label><input type="text" name="class" id="class" defaultValue={userclass} /><br />
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /> <br />
            <label htmlFor="race">Race:</label><input type="text" name="race" id="race" defaultValue={race} /> <br />
            <label htmlFor="cantrip1">1st Cantrip:</label><input type="text" name="cantrip1" id="cantrip1" defaultValue={cantrip1} /> <br />
            <label htmlFor="cantrip2">2nd Cantrip:</label><input type="text" name="cantrip2" id="cantrip2" defaultValue={cantrip2} /> <br />
            <label htmlFor="firstlevelspell">Level 1 Spell:</label><input type="text" name="firstlevelspell" id="firstlevelspell" defaultValue={firstlevelspell} /> <br />
            <label htmlFor="equipment">Equipment:</label><input type="text" name="equipment" id="equipment" defaultValue={equipment} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={username} /> <br />
            <label htmlFor="username">2nd Cantrip:</label><input type="text" name="username" id="username" defaultValue="Enter your name here"/> <br />
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;