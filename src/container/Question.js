import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOne } from '../store/actions/questionAction';

class Question extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchOne(id);
  }

  render() {
    const { title, body } = this.props.question;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

Question.propTypes = {
  fetchOne: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  question: state.questions.item,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchOne })(Question);
