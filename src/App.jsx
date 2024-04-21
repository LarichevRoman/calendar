import React from 'react';
import Calendar from './components/Calendar';

class App extends React.Component {
  state = {
    date: null
  };

  handleDateChange = date => this.setState({date});

  render() {
    const {date} = this.state
  return (
      <div>
        {date && <p>Выбранная дата: {date.toLocaleDateString()} </p>}
                <Calendar 
          onChange = {this.handleDateChange}
        />
        {date && <p>{date.toLocaleDateString()} </p>}  
      </div>
    );
  }
}

export default App;
