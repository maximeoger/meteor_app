import React, { Fragment } from 'react';
import ChooseList from './ChooseList';

const Form = ({handleSubmit, handleChange, lastname, firstname, github, handleGithubInput}) => {
    return (
    <Fragment>

      <form onSubmit={handleSubmit}>
      
      <label>
      Nom de famille
      <input type="text"
          placeholder="nom de famille" 
          onChange={handleChange} 
          value={lastname} 
          name="lastname"></input>
      </label>
      
      <label>
        prénom
      <input type="text" 
          placeholder="prénom"
          onChange={handleChange} 
          value={firstname} 
          name="firstname"></input>
      </label>
      
      <div>
        <label>
          lien github
        <input type="text"
            placeholder="lien github" 
            onChange={handleGithubInput} 
            value={github} 
            name="github"></input>
        </label>
      </div>
      
       
        <button type="submit">go</button>
      </form>
    </Fragment>
  )
}

export default Form;