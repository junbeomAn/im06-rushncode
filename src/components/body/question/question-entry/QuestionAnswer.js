import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Writer, LikeCountAnswer, Answer } from '../question-entry';

/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
const QuestionAnswer = ({
  aID,
  username,
  count,
  body,
  time,
  chAnswers,
  raiseLikeCount,
  postAnswerReply,
}) => (
  <div className="QuestionEntryAnswerEntry">
    <div className="QuestionEntryAnswerFirst">
      <div className="QuestionEntryAnswerFirstLike">
        <LikeCountAnswer count={count} raiseLikeCount={raiseLikeCount} aID={aID} />
      </div>
    </div>
    <div className="QuestionEntryAnswerSecond">
      <Answer
        body={body}
        time={time}
        postAnswerReply={postAnswerReply}
        aID={aID}
        chAnswers={chAnswers}
      />
    </div>
    <div className="QuestionEntryAnswerThird">
      <div className="QuestionEntryAnswerThirdCheck">
        <div className="ItemBox">
          <div className="ItemBoxImage">
            <div
              className="likeBtn"
              onClick={() => {
                window.confirm('선택하시겠습니까?');
              }}
            >
              <Icon name="check" size="big" />
            </div>
          </div>
          <div className="ItemBoxNum">채택</div>
        </div>
      </div>
      <div className="QuestionEntryAnswerThirdReward">
        <Writer username={username} />
      </div>
    </div>
  </div>
);
export default QuestionAnswer;
