import React from 'react';

const QuestionWrite = ({ tags, onTagChange }) => (
  <div>
    {/* 태그 */}
    <div className="input-group-prepend input-group-lg QuestionWriteTag">
      <div>
        <div className="QuestionWriteTagTitle">
          <span className="input-group-text QuestionWriteTagTitle" id="basic-addon1">
            태그를 최대 3개 까지 선택해 주세요
          </span>
        </div>
        <div className="form-check form-check-inline QuestionWriteTagInputBox">
          <form>
            {tags.map(item => (
              <label className="form-check-label QuestionWriteTagInput" htmlFor={item.tag} key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.tag}
                  onChange={event => onTagChange(event)}
                />
                {item.tag}
              </label>
            ))}
          </form>
        </div>
      </div>
    </div>

    {/* 입력 폼 */}
    <div className="input-group-prepend input-group-lg QuestionWriteInput">
      <span className="input-group-text QuestionWriteInputTitle" id="basic-addon1">
        제목
      </span>
      <input
        type="text"
        className="form-control inputTitle"
        name="title"
        placeholder="제목을 입력하세요"
      />
    </div>
    <div className="input-group-prepend input-group-lg QuestionWriteMoney">
      <span className="input-group-text QuestionWriteMoneyTitle" id="basic-addon1">
        금액
      </span>
      <input
        type="text"
        className="form-control inputReward"
        name="reward"
        placeholder="금액을 입력하세요"
      />
    </div>
  </div>
);

export default QuestionWrite;
