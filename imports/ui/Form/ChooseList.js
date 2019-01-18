import React, { Fragment } from 'react'


const ChooseList = ({githubResults, handleClickOnResult}) => {
    return (
        <Fragment >
            { githubResults.items && githubResults.items.map( user => (
                <div key={user.id} onClick={ () => handleClickOnResult(user) }>
                    <img src={user.avatar_url}  width="50"/>
                    <span>
                        { user.login }
                    </span>
                </div>
            ))}
        </Fragment>
    )
}

export default ChooseList