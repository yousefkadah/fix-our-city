import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class FloatingButton extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleToAddAnIssue = this.handleToAddAnIssue.bind(this);
  }

  handleToAddAnIssue = () => {
    this.context.router.push('/add-an-issue');
  };

  render() {
    
    return (
      <FloatingActionButton
        onClick={this.handleToAddAnIssue}
        secondary
        >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

FloatingButton.contextTypes = {
  router: PropTypes.object,
};
