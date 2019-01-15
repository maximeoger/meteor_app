import React, { Fragment } from 'react';

const Form = ({handleSubmit, handleChange, lastname, firstname, github}) => {
    return (
    <Fragment>

      <header>
        <h1>Ajouter un eleve</h1>
      </header>

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
      

      <label>
        lien github
      <input type="text"
          placeholder="lien github" 
          onChange={handleChange} 
          value={github} 
          name="github"></input>
      </label>
    
       
        <button type="submit">go</button>
      </form>

    </Fragment>
  )
}

export default Form;