const React = require('react');
class Edit extends React.Component {
 render(){
   const {title, description, hitDie, primaryAbility, image, _id} = this.props.classes;
   const id = _id;
   return (
     <div>
        <form action={`/classes/${id}/?_method=PUT`} method="POST">
            <label htmlFor="title">Class Name:</label><input type="text" name="title" id="title" defaultValue={title}/><br/>
            <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description}/> <br/>
            <label htmlFor="hitDie">Hit Die:</label><input type="text" name="hitDie" id="hitDie" defaultValue={hitDie}/> <br/>
            <label htmlFor="primaryAbility">Primary Abilities:</label><input type="text" name="primaryAbility" id="primaryAbility" defaultValue={primaryAbility}/> <br/>
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image}/> <br/>
            <input type="submit" value="Edit Class" />
        </form>
     </div>
   )
 }
}
module.exports = Edit;