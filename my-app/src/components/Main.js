import React from 'react'
import Header from './Header.js'

class Main extends React.Component{
  state = {
    recipes : []
  }

  render(){
    return (
      <div>
        <Header/>
      </div>
    )
  }
}


export default Main;
