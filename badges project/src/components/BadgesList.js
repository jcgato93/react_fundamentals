import React from 'react'

import './styles/Badge.css'

class BadgeList extends React.Component{

    render(){
        return(
            <ul className="list-unstyled">
                     {this.props.badges.map((badge)=>{
                         return (
                           <li key={badge.id} className="container card">
                             <div className="row card-body">
                               <div className="col-3">
                                 <img
                                   className="Badge__avatar"
                                   src="https://www.gravatar.com/avatar?d=identicon"
                                   alt="Avatar"
                                 />
                               </div>
                               <div className="col-9">
                                 <div className="container">
                                   <div className="row">{badge.firstName}</div>
                                   <div className="row">{badge.lastName}</div>
                                 </div>
                               </div>
                             </div>
                           </li>
                         );
                     })}
            </ul>
        )
    }
}

export default BadgeList;