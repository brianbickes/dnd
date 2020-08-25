const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default>
                <div class="equipmentIndex">
                    {
                        this.props.equipment.map((equipment) => {
                            return (
                            <div key={equipment._id}>
                                <span><img class="weaponImage" src={equipment.image} className="Image" height="300px" width="300px" /></span><br />
                                <h1><a href={`/equipment/${equipment._id}`}>{equipment.title}</a></h1>
                                {/* <h3> Character Description</h3>
                        <p>{classes.description}</p>
                        <h3>Hit Die</h3>
                        <p>{classes.hitDie}</p>
                        <h3>Primary Abilities</h3>
                    <p>{classes.primaryAbility}</p> */}
                                {/* <a href={`/classes/${classes._id}/edit`}>Edit this Class {classes.createdAt.toString()}</a> */}
                                {/* <form action={`/classes/${classes._id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" /> 
                        </form> */}
                            </div>
                            )
                        })
                    }
                </div>
            </Default>
        )
    }
}
module.exports = Index;