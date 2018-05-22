import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Writer, LikeCountAnswer, Answer } from '../question-entry';

/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
const QuestionAnswer = ({
  aID,
  myID,
  questionID,
  userID,
  username,
  picked,
  count,
  body,
  time,
  chAnswers,
  pickAnswer,
  raiseLikeCount,
  postAnswerReply,
  deleteAnswer,
  deleteChAnswer,
  fetchModifyAnswer,
}) => (
  <div className="QuestionEntryAnswerEntry">
    <div className="QuestionEntryAnswerFirst">
      <div className="QuestionEntryAnswerFirstLike">
        <LikeCountAnswer count={count} raiseLikeCount={raiseLikeCount} aID={aID} />
      </div>
    </div>
    <div className="QuestionEntryAnswerSecond">
      <Answer
        userID={userID}
        body={body}
        myID={myID}
        time={time}
        postAnswerReply={postAnswerReply}
        aID={aID}
        chAnswers={chAnswers}
        deleteAnswer={deleteAnswer}
        deleteChAnswer={deleteChAnswer}
        fetchModifyAnswer={fetchModifyAnswer}
      />
    </div>
    <div className="QuestionEntryAnswerThird">
      <div className="QuestionEntryAnswerThirdCheck">
        {picked ? (
          <div className="ItemBox picked">
            <div className="ItemBoxImage">
              <div className="picked-item">
                <Icon name="check" size="big" />
              </div>
            </div>
            <div className="ItemBoxNum picked-item">
              <span>채택됨</span>
            </div>
          </div>
        ) : (
          <div className="ItemBox">
            {myID !== questionID ? null : (
              <div className="ItemBoxImage">
                <div
                  className="likeBtn"
                  onClick={() => {
                    if (window.confirm('선택하시겠습니까?')) {
                      pickAnswer(aID);
                    }
                  }}
                >
                  <Icon name="check" size="big" />
                  <div className="ItemBoxNum">채택</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="QuestionEntryAnswerThirdReward">
        <Writer username={username} userID={userID} />
      </div>
    </div>
  </div>
);
export default QuestionAnswer;
