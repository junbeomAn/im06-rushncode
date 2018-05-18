import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Writer, LikeCount, Answer } from '../question-entry';

const QuestionAnswer = ({ count, raiseLikeCount }) => (
  <div className="QuestionEntryAnswerEntry">
    <div className="QuestionEntryAnswerFirst">
      <div className="QuestionEntryAnswerFirstLike">
        <LikeCount count={count} raiseLikeCount={raiseLikeCount} />
      </div>
    </div>
    <div className="QuestionEntryAnswerSecond">
      <Answer />
    </div>
    <div className="QuestionEntryAnswerThird">
      <div className="QuestionEntryAnswerThirdCheck">
        <div className="ItemBox">
          <div className="ItemBoxImage">
            <a className="likeBtn" href="#" onClick={() => {window.confirm('선택하시겠습니까?')}}>
              <Icon name="check" size="big" />
            </a>
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
