import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    }
  }

  componentDidMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
    this.generateLinks;
  }

  render() {
    var styles = {
      headBox: {
        paddingLeft: '10px',
        paddingTop: '10px'
      },
      pageBackground: {
        backgroundImage: 'linear-gradient(to right, #1565C0, #b92b27)',
      }
    };

    return (
      <div className='App' style={styles.pageBackground}>
        <h1 className='jumbotron bg-light' style={styles.headBox}>San Diego Top Spots</h1>
        <h3 className='bg-light' style={{ paddingLeft: '10px', paddingBottom: '10px' }}>A list of the top 30 places to see in San Diego, California.</h3>
        <div className='container'>
          <div>
            {
              this.state.topspots.map(topspot => (
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
