import React from 'react';

import { connect } from 'react-redux';
import ChatBox from './ChatBox';
import { ChatBtn } from './ChatBtn';

import '../../style/Chat.css';

class Chat extends React.Component {
  state = { isOpen: false };

  onToggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    return (
      <div>
        {this.state.isOpen && <ChatBox onToggle={this.onToggle} />}
        <ChatBtn onToggle={this.onToggle} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // toys: state.toysApp.toys,
  };
};

const mapDispatchToProps = {
  //   searchToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
