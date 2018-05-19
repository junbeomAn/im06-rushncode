import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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

  postQuestionReply = () => {
    const { id } = this.props.match.params;
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const data = {
      questionID: id,
    };
    data.body = document.getElementsByClassName('questionReplyBody')[0].value;
    axios
      .post('http://localhost:3001/api/question/reply/', data, config)
      .then((message) => {
        alert(message);
        this.props.fetchQuestionEntry(id);
      })
      .catch((err) => {
        throw err;
      });
  };

  postAnswerReply = () => {
    console.log('postAnswerReply');
    // const config = {
    //   headers: {
    //     'x-access-token': localStorage.getItem('token'),
    //   },
    // };
    // const data = {
    //   answerId,
    //   body: 'aa',
    // };
    // axios
    //   .post('http://localhost:3001/api/question/chanswer/', data, config)
    //   .then((message) => {
    //     alert(message);
    //     const { id } = this.props.match.params;
    //     this.props.fetchQuestionEntry(id);
    //   })
    //   .catch(err => console.log(err));
  };

  raiseLikeCount = () => {
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

  /* eslint no-nested-ternary: 0 */
  render() {
    const {
      title, qBody, qGood, qView, qReward, qTime, qID, replies,
    } = this.props.question;
    const { first } = this.state;
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : first ? (
          <h1>Loading...</h1>
        ) : (
          <QuestionEntry
            title={title}
            qID={qID}
            qBody={qBody}
            qGood={qGood}
            qView={qView}
            qReward={qReward}
            qTime={qTime}
            replies={replies}
            raiseLikeCount={this.raiseLikeCount}
            postQuestionReply={this.postQuestionReply}
            postAnswerReply={this.postAnswerReply}
          />
        )}
      </div>
    );
  }
}

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  question: state.questions.item,
  loading: state.questions.loading,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestionEntry })(QuestionEntryContainer);
