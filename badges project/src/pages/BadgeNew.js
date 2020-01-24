import React from 'react';

import header from '../images/platziconf-logo.svg';
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';

import api from '../api';


class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };


  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({ loading: true, error: null })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })
    } catch (error) {
      console.error(error);            
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    return (
      <div>        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || ' FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                webPage="http://juan-castillo.web.app/"
                title={this.state.form.jobTitle || 'JOB TITLE'}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;