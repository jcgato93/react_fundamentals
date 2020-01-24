import React from 'react';
import { Link } from 'react-router-dom';

import BadgeList from '../components/BadgesList';
import './styles/Badges.css';
import logo from '../images/badge-header.svg';

import api from '../api';

class Badges extends React.Component {
  

  constructor(props){
    super(props);
    console.log('1. Constructor')

    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount(){
    console.log('3. Did Mount');

    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log("props y state antes de actualizar",{
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log("props y state actuales",{
      props: this.props,
      state: this.state,
    });    
  }

  fetchData = async () =>{
    this.setState({loading: true, error: null})

    try {
      const data = await api.badges.list();
      this.setState({loading: false, data:data})
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }
  

  render() {
    console.log('2/4. Render')

    if(this.state.loading === true){
      return 'Loading ...';
    }

    if(this.state.error){
      const error = this.state.error;
      return `Error: ${error.message}`;
    }

    return (
      <React.Fragment>        
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={logo} alt="Conf logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

         <div className="Badges__list">
             <div className="Badges__container">
                 <BadgeList badges={this.state.data} />                 
             </div>
         </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Badges;