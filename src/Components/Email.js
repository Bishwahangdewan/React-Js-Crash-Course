import React from 'react';

function Email(props) {
    return (
        <div className="container mb-3">
            <div className="card p-3">
                <p><b>Name</b> : {props.name} </p>
                <p><b>Email</b> : {props.email} </p>
                <button className="btn-sm btn-secondary" onClick={props.deleteComponent.bind(this, props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Email;