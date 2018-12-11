import React, {Fragment} from 'react';

const Form = ({handleSubmit}) => {
  return (
    <Fragment>
      <header>
          <h1>Ajouter un eleve</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="lastname"></input>
        <input type="text" name="firstname"></input>
        <input type="text" name="classroom"></input>
        <select>
          <option value="">Choisissez un metier</option>
          <option value="dev">Développeur</option>
          <option value="design">Designer</option>
          <option value="non-binary">Non binaire</option>
        </select>
        <button type="submit">go</button>
     </form>
    </Fragment>
  )
}

export default Form;