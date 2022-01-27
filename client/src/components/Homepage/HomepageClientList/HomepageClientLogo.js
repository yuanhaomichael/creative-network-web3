import React from 'react';

function HomepageClientLogo({src, clientName}) {
    return (
        <div style={{display: 'flex',justifyContent: 'center'}}>

          <img className="client-logo" src={src} alt={clientName}/>

        </div>
    );
}

export default HomepageClientLogo;
