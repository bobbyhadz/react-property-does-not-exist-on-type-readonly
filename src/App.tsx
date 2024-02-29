import React from 'react';

// 👇️ we set the props to empty object and set the state to {value: string}
class App extends React.Component<{}, {value: string}> {
  constructor(props: any) {
    super(props);

    this.state = {value: ''};
  }

  handleChange = (event: any) => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            // ✅ Everything works now
            value={this.state.value}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
