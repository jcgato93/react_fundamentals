import React from 'react';

import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';


class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
            

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName="Juan" 
                        lastName="Castillo" 
                        webPage="http://juan-castillo.web.app/"
                        title="FullStack Developer" />
                    </div>
                    <div className="col-6">
                        <BadgeForm />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BadgeNew;