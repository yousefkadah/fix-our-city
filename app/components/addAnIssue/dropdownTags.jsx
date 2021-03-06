import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as inputActions from '../../actions/inputActions';

class dropdownTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ value });
    this.props.selected(this.props.tags[index]);
  }

  render() {
    const {
      tags,
    } = this.props;
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} primaryText={tags[0]} />
        <MenuItem value={2} primaryText={tags[1]} />
        <MenuItem value={3} primaryText={tags[2]} />
        <MenuItem value={4} primaryText={tags[3]} />
        <MenuItem value={5} primaryText={tags[4]} />
        <MenuItem value={6} primaryText={tags[5]} />
      </DropDownMenu>

    );
  }
}


dropdownTags.propTypes = {
  tags: PropTypes.array.isRequired,
  selected: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tags: state.tags.tags,
    select: state.tags.selectedTag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selected: tag => dispatch(inputActions.selectedTag(tag)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(dropdownTags);
