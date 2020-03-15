import React, { Component } from 'react';
import {noVisibility} from '../../actions/actions';
import { connect } from 'react-redux';
import FormToRender from './formToRender';

class CreateTournamentForm extends Component {


  render() {
    const isVisible = this.props.isVisible;
        if(isVisible === true ) {
          return(
            <div>
              <FormToRender />
            </div>
          )
        } else {
          return (
            <div />
          )
        }
  }
}

const mapStateToProps = state => ({
    isVisible: state.loading.visible
  });

const mapDispatchToProps = dispatch => ({
  turnOffVisibility: () => dispatch(noVisibility()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTournamentForm);
