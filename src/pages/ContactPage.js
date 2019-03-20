import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Write to us!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write whatever you want to us :)"
          />
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Are you sure, you want leave the page?"
        />
      </div>
    );
  }
}
export default ContactPage;
