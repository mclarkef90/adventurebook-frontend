import React from 'react';
import {connect} from 'react-redux';
import {fetchAdventures} from '../actions/fetchAdventures'

class Adventure extends React.Component {

  state={}

  componentDidMount(){
    let id= this.props.match.params.id
    this.props.boundFetchAdventures();
    fetch(`http://localhost:3000/api/v1/adventures/${id}`)
      .then(response => response.json())
      .then(adventure => {
        this.setState({
          adventure: adventure
        })
      })
  }

  render(props){
    let id= this.props.match.params.id
    console.log(this.state.adventure)
    return(
      <>
      {this.state.adventure ?
      <>
      <h1>{this.state.adventure.data.attributes.title}</h1>
      <p>hi from Adventure show</p>
      </>
      :
      null}
      </>
  )}
}

const mapStateToProps = state => {
  return{
  adventures: state.adventures
  }
}

const mapDispatchToProps = dispatch => {
  return{
    boundFetchAdventures: () => dispatch(fetchAdventures()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Adventure)
