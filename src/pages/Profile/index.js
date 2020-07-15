import React, {Component} from 'react';
import './style.css'
import api from '../../services/api'

import CardProfile from './CardProfile'
import RepositoriesList from './RepositoriesList'
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
            repos: []
        }
    }

    componentDidMount = async () => {
        const { location } = this.props;
        const user = location.state.res;
        const {data} = await api.get(`/users/${user.login}/repos`)
        this.setState({ user, repos: data });        
      };

    render(){
        let {
            avatar_url, 
            name, 
            bio, 
            location, 
            public_repos, 
            followers,
            following
          } = this.state.user;
        return(
            <div className="container">
            <Header />
            <div>
            <div className="profile__container">
                <CardProfile
                avatar={avatar_url}
                name={name}
                bio={bio}
                location={location}
                repo={public_repos}
                followers={followers}
                following={following}
                />
              <RepositoriesList
              repositories={this.state.repos} />
                
            </div>
            </div>
             <Footer />
            </div>
        )
    }
}

export default Profile