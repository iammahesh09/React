import React from 'react'

const SingalPost = (props) => {
    return (
        <React.Fragment>
            <div className='card mb-4'>
                <div className="card-body">
                    <div className="badge-id"><span className="badge bg-dark">{props.id}</span></div>
                    <h4 className="card-title text-primary">{props.title}</h4>
                    <div className="card-subtitle mb-2 text-muted">{props.subtitle}</div>
                    <p className="card-text">{props.description}</p>
                    <input type="text" value={props.title} onChange={props.titleChange} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SingalPost;