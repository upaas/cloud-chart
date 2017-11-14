import React from "react";
import { render } from "react-dom";
import WebIm from "../src/webim";
import "babel-polyfill";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPanelState: false,
      unread: 0
    };
  }
  handleToggle = () => {
    this.setState({ mainPanelState: !this.state.mainPanelState });
  };
  handleClickWork = () => {
    this.refs.webim.showTeamChatPanel({
      objectId: "2963198", //项目ID
      objectType: "work",
      title: "test", //项目名称
      appId: 1
    });
  };
  handleClickTask = () => {
    this.refs.webim.showTeamChatPanel({
      objectId: "110006_8957158_7_20_636413545984351310", //项目ID
      objectType: "task",
      title: "gggggg", //项目名称
      appId: 1
    });
  };
  syncUnread = num => {
    this.setState({ unread: num });
  };
  render() {
    let { mainPanelState } = this.state;
    return (
      <div>
        <button style={{ float: "left" }} onClick={this.handleToggle}>
          Toggle
        </button>
        <button style={{ float: "left" }} onClick={this.handleClickWork}>
          Work
        </button>
        <button style={{ float: "left" }} onClick={this.handleClickTask}>
          Task
        </button >
        <div style={{ float: "left" }}>{this.state.unread}</div>
        <WebIm
          ref="webim"
          mainPanelState={mainPanelState}
          syncUnread={this.syncUnread}
        />
      </div>
    );
  }
}

render(<Example />, document.getElementById("bs-main"));
