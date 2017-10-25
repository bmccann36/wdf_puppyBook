import React, { Component } from 'react';

export default class AllPuppies extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.onLoadPuppies()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.allPuppies.map(puppy => {
            return (<li key={puppy.id} ><a href="#">{puppy.name}</a></li>)
          })
          }
        </ul>
      </div>
    )
  }
}
