import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {fetchAdventures} from '../actions/fetchAdventures'
import {fetchReviews} from '../actions/fetchReviews'
import {fetchUser} from '../actions/fetchUser'
import Adventure from '../components/Adventure'
import AdventureSearch from '../components/AdventureSearch';
import AdventuresList from '../components/AdventuresList'
import { addLike } from '../actions/addLike';

class AdventureContainer extends React.Component {

  likeHandler = (event) => {
    event.persist()
    let id= parseInt(event.target.dataset.id)
    let likes= parseInt(event.target.dataset.likes)
    let updatedLikes= likes + 1
    this.props.boundAddLike(id, updatedLikes);
  }

  render(props){

    // let adventure = this.props.adventures.filter(adventure => adventure.id == id)[0]


    console.log(this.props)
    return(
      <>
      </>

          )
        }
      }


export default (AdventureContainer)
