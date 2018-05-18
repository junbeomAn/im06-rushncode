import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { convertFromRaw } from 'draft-js';
import QuestionEntry from '../../components/body/question/QuestionEntry';
import { fetchQuestionEntry } from '../../redux/actions/questionAction';

class QuestionEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestionEntry(id);
  }

  componentWillReceiveProps() {
    if (!this.props.loading) this.setState({ first: false });
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
      .then(() => {
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      title, qBody, qGood, qView, qReward, qTime,
    } = this.props.question;
    const { first } = this.state;
    console.log(this.props.loading);
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : first ? (
          <h1>Loading...</h1>
        ) : (
          // console.log('check : ', this.props.question),
          <QuestionEntry
            title={title}
            qBody={qBody}
            qGood={qGood}
            qView={qView}
            qReward={qReward}
            qTime={qTime}
            raiseLikeCount={this.raiseLikeCount}
          />
        )}
      </div>
    );
  }
}

QuestionEntryContainer.propTypes = {
  fetchQuestionEntry: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  question: state.questions.item,
  loading: state.questions.loading,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestionEntry })(QuestionEntryContainer);

// return (
//   <div>
//     {this.props.loading ? (
//       <h1>Loading...</h1>
//     ) : first ? (
//       (<h1>Loading...</h1>, this.setState({ first: false }))
//     ) : (
//       <QuestionEntry
//         title={title}
//         qBody={qBody}
//         qGood={qGood}
//         qView={qView}
//         qReward={qReward}
//         qTime={qTime}
//         raiseLikeCount={this.raiseLikeCount}
//       />
//     )}
//   </div>
// );

// return (
//   <div>
//     {this.props.loading ? (
//       <h1>Loading...</h1>
//     ) : (
//       (console.log('check : ', this.props.question),
//       (
//         <div>
//           <QuestionEntry
//             title={title}
//             qBody={qBody}
//             qGood={qGood}
//             qView={qView}
//             qReward={qReward}
//             qTime={qTime}
//             raiseLikeCount={this.raiseLikeCount}
//           />
//         </div>
//       ))
//     )}
//   </div>
// );
