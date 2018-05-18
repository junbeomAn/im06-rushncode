import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Writer, LikeCount, Answer } from '../question-entry';

/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
const QuestionAnswer = ({ count, raiseLikeCount, postAnswerReply }) => (
  <div className="QuestionEntryAnswerEntry">
    <div className="QuestionEntryAnswerFirst">
      <div className="QuestionEntryAnswerFirstLike">
        <LikeCount count={count} raiseLikeCount={raiseLikeCount} />
      </div>
    </div>
    <div className="QuestionEntryAnswerSecond">
      <Answer postAnswerReply={postAnswerReply} />
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
        <Writer />
      </div>
    </div>
  </div>
);
export default QuestionAnswer;
