import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css'

class Artist extends Component{
  render(){
    return (
      <div className="list-group-item">
          <a href={`https://www.google.ca/search?q= + ${this.props.artists.artist.toLowerCase()} +Artist +Music`} className="listItems" >{this.props.artists.artist}</a>
          <a href={`https://www.ticketmaster.ca/search?tm_link=tm_header_search&user_input= + ${this.props.artists.artist}
            +&q= ${this.props.artists.artist.toLowerCase()} +Toronto`} className="listItems" >{this.props.artists.date} </a>
          <a href={`https://www.google.ca/search?q= + ${this.props.artists.venue} +Venue +Toronto`} className="listItems" >{this.props.artists.venue}</a>

      </div>
    )
  }
}

export default Artist