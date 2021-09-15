import React, { Component } from 'react';
import Card from '../card';
import './style.css'

class FetchData extends Component {
  state = {
    data: null,
    value: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      if (this.state.value) {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.value}`
        )
          .then((res) => res.json())
          .then((data) => this.setState({ data: data.results }))
          .catch((err) => console.log(err));
      }
    }
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { data, value } = this.state;
    return (
      <div>
        <div className="main-container">
          <p className='logo'>MoviesHub</p>
          <i class="far fa-search"></i>
          <input
          
            type="text"
            placeholder="Enter your Film Name"
            value={value}
            onChange={this.changeHandler}
          />
        </div>
          {data ? <Card data={data} /> : <h1 className='no-data'>No Data to show search again !</h1>}
      </div>
    );
  }
}
export default FetchData;
