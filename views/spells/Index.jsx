const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default>
                <ul>
                    {
                        this.props.spells.map((spells) => {
                            return (
                            <div key={spells._id}>
                                <span><img src={spells.image} className="Image" height="300px" width="35%" /></span><br />
                                <h1><a href={`/spells/${spells._id}`}>{spells.title}</a></h1>
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
                </ul>
            </Default>
        )
    }
}
module.exports = Index;