import React from 'react';
import './style.css'

import Card from '../../../components/Card'

const RepositoriesList = ({repositories}) => {
    return(
        <div className="repositories__container">
           {repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map(({name, description, stargazers_count}) => (
                 // eslint-disable-next-line no-unused-expressions
                 <Card
                  key={`${name}--key`}
                  name={name}
                  description={description}
                  star={stargazers_count}
                  />
           ))}
        </div>
    )

}

export default RepositoriesList