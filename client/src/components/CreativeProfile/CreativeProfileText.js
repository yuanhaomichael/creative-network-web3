import React from 'react';
import Icofont from 'react-icofont';


function CreativeProfileText({industry, role, expertise,language,client, name,bio,img,rating,jobs,location}) {
    
    return (
        <div>
        	 <div className="d-flex flex-row">
        	 	<img src={img} alt={name} className="profile mt-4" />
        	 	<p className="h3 mt-5 ml-5 ">{name}</p>
        	 </div>
         	<p className="mt-5">{bio}</p>

         	<div className="d-flex flex-row text-center mb-5 mt-5">
        	<hr className="mr-3" style={{
			    color: '#000000',
			    backgroundColor: '#000000',
			    
			    width: 85,
			    borderColor : '#000000'
			}}/>
			<Icofont size="2" icon="icofont-star" />
			<p className="h6 mt-2 ml-1">{rating} &nbsp;</p>
        		<p className="h6 mt-2">({jobs} jobs)</p>
			<hr  className="ml-3" style={{
			    color: '#000000',
			    backgroundColor: '#000000',
			    
			    width: 80,
			    borderColor : '#000000'
			}}/>
			</div>


        	<div className="d-flex flex-row text-center">
        		
        	</div>

            <p className="">Industry: { industry.map(industry => <span className="tag">{industry}</span>) }</p>
            <p className="">Expertise: { expertise.map(expertise => <span className="tag">{expertise}</span>) }</p>
            <p className="">Role: { role.map(role => <span className="tag">{role}</span>) }</p>
            <p className="">Language: { language.map(language => <span className="tag">{language}</span>) }</p>
            <p className="">Location: <span className="tag">{location}</span></p>
            <p className="">Client: { client.map(client => <span className="tag">{client}</span>) }</p>

        	
        	
        </div>
    );
}

export default CreativeProfileText;

