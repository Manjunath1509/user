import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }
  // handleIncreament() {
  //   this.setState({ count: this.state.count + 1 });
  // }

  // renderTag() {
  //   if (this.state.tags.length === 0) return <p>There are no tages</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncreament}
          style={this.styles}
          className="btn btn-secondary m-4"
        >
          Increament
        </button>
        {/* <div>
          {this.state.tags.length === 0 && "Please enter the tags"}
          {this.renderTag()}
        </div> */}
        {/* <img src={this.state.imageURL} alt="" /> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
