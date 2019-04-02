import React, { Component } from 'react';
import axios from 'axios';
import './Cities.scss';

export default class Cities extends Component {
   state = {
      cities: [],
   }

   componentDidMount = async () => {
      let res = await axios.get('/api/cities');
      await this.setState({ cities: res.data })
   }

   render() {
      let displayCities = this.state.cities.map((city, index) => {
         return (
            <h3 key={index}>{city.city}</h3>
         )
      })
      return (
         <div>
            <h1>Cities</h1>
            {displayCities}
         </div>
      )
   }
}
