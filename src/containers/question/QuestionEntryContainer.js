import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import QuestionEntry from '../../components/body/question/QuestionEntry';
import { fetchQuestionEntry } from '../../redux/actions/questionAction';

class QuestionEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestionEntry(id);
  }

  raiseLikeCount = () => {
    console.log('asdfasd', this.props.question);
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    axios
      .post(`http://localhost:3001/api/question/good/${this.props.question.qID}`, {}, config)
      .then((res) => {
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      title, qBody, qGood, qView, qReward, qTime,
    } = this.props.question;
    console.log(this.props.question);
    return (
      <div>
        <QuestionEntry
          title={title}
          qBody={qBody}
          qGood={qGood}
          qView={qView}
          qReward={qReward}
          qTime={qTime}
          raiseLikeCount={this.raiseLikeCount}
        />
      </div>
    );
  }
}

QuestionEntryContainer.propTypes = {
  fetchQuestionEntry: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  question: state.questions.item,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestionEntry })(QuestionEntryContainer);
