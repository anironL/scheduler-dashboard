import React, { Component } from "react";

class Panel extends Component {
  // The key can use the value from panel.id
  // The id can use the value from panel.id
  // The label can use the value from panel.label
  // The value can use the value from panel.value

  render() {
    const { label, value } = this.props;

    return (
      <section
        className="dashboard__panel"
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
        <p>hi</p>
      </section>
    );
  }
}

export default { Panel }; 


