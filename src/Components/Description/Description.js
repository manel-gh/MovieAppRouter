import { Button } from '@material-ui/core';
import React from 'react'
import Descrip from '../../Descrip/Descrip';

const Description = ({location:{state:{movie}}, history,movies}) => {
  
    return (
        <div>
            <h1>{movie.description}</h1>
            <Descrip movie={movie}/>
            <Button onClick={history.goBack}>Go back</Button>
        </div>
    )
}

export default Description;
