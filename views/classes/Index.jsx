const React = require('react');
class Index extends React.Component {
    render() {
        return (<ul>
            {
                this.props.classes.map((classes) => {
                    return (<li key={classes._id}>
                        <h1>{classes.title}</h1>
                        <p>{classes.description}</p>
                        <p>{classes.hitDie}</p>
                        <p>{classes.primaryAbility}</p>
                        <a href={`/classes/${classes._id}/edit`}>Edit this Class {classes.createdAt.toString()}</a>
                        <form action={`/classes/${classes._id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Class" />
                        </form>
                    </li>)
                })
            }
        </ul>
        )
    }
}
module.exports = Index;