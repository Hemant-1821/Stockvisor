import React,{Component} from 'react';
import {News} from './components/news/news';
import {Corousel} from 'react-bootstrap';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      news: []
    };
  }
  
  async componentDidMount()
  {
    const url = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/AAPL';
    const response = await fetch(url,{
      method:'GET',
      headers : new Headers({
        'Content-type': 'application/json',
        'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
        'x-rapidapi-key': 'e1575a1859msh964b4f514104d3ap1db78ejsne4a6db7f8793'
      })
    });
    const data = await response.json();
    this.setState({news: data.item})
    console.log(data.item);
  }
  render()
  {
    return(
      <div className="App">
        <h1>News Feed</h1>
        <News news={this.state.news}/>
      </div>
    )
  }
}

export default App;
