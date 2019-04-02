import React, { Component } from 'react';
import axios from 'axios';
import './Cities.scss';

export default class Cities extends Component {
   state = {
      cities: [],
      search: '',
   }

   componentDidMount = async () => {
      let res = await axios.get('/api/cities');
      await this.setState({ cities: res.data })
   }

   handleSearch = async (input) => {
      await this.setState({ search: input });
   }

   render() {
      let citiesArray = this.state.cities;
      if(this.state.search) {
         citiesArray = this.state.cities.filter((object, index) => {
            if(object.city.toLowerCase().includes(this.state.search.toLowerCase()) || object.country.toLowerCase().includes(this.state.search.toLowerCase())) return true; //filters by city and country
            else return false;
         })
      }


      let displayCities = citiesArray.map( city => {
         return (
            <div key={city.id}>
               <h3>{city.city}</h3>
               <p>Country: {city.country}</p>
               <p>Cost of Living Index: {city.cost_of_living_index}</p>
               <p>Rent Index: {city.rent_index}</p>
               <p>Groceries Index: {city.groceries_index}</p>
               <p>Restaurant Price Index: {city.restaurant_price_index}</p>
               <p>Purchasing Power Index: {city.purchasing_power_index}</p>
               <p>Apartment: ${city.apartment}/mo</p>
               <p>Utilities: ${city.utilities}/mo</p>
               <p>Internet: ${city.internet}/mo</p>
               <p>Public Transport Pass: ${city.monthly_pass}/mo</p>
               <p>Travel Ticket: ${city.travel_ticket}</p>
               <p>Small Water: ${city.small_water}</p>
               <p>Large Water: ${city.large_water}</p>
               <p>Eggs: ${city.eggs}</p>
               <p>Apples: ${city.apples}</p>
               <p>Milk: ${city.milk}</p>
               <p>Cappuccino: ${city.cappuccino}</p>
               <p>Domestic Beer: ${city.domestic_beer}</p>
               <p>Movie Ticket: ${city.movie_ticket}</p>
            </div>
         )
      })
      return (
         <div>
            <h1>Cities</h1>
            <input type="text" placeholder='search' onChange={ (e) => this.handleSearch(e.target.value) } />
            {displayCities}
         </div>
      )
   }
}
