import React, { Component } from 'react'


class FetchData extends Component {

  state = {
    data : [],
    value : ''
  }

  componentDidUpdate(prevProps , prevState ){
    if ( prevState.value !== this.state.value ) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.value}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data : data.results }))
      .catch((err) => console.log(err))
    }
  }

  changeHandler = (e) => {
    this.setState({ value : e.target.value})
    console.log(e.target.value);
  }

  render(){
    const { data , value } = this.state
    console.log(data);
    return(
      <div>
        <input type="text" placeholder = 'Enter your Film Name' value = {value} onChange = {this.changeHandler} />
        {/* <img src="" alt="" /> */}
        <p>Hi mo Salah </p>
      </div>
    )
  }
}

export default FetchData