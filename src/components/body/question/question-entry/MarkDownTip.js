import React from 'react';
import { Icon } from 'semantic-ui-react';

const MarkDownTip = () => (
  <div>
    <h3>Markdown문서로 내용 작성 하기</h3>
    <h3 className="tip-subtitle">코드</h3>
    키보드 물결키(~)아래에 표시된 `를 3개 붙여서 아래와 같이 코드의 시작과 끝을 표시합니다.<br />
    ```<br />
    if (isAwesome()){'{'} <br />
    return true <br />
    {'}'}<br />
    ```
    <h3 className="tip-subtitle">헤더</h3>
    # 이것은 `h1` 태그입니다.<br />
    ## 이것은 `h2` 태그입니다.<br />

    <h3 className="tip-subtitle">강조</h3>
    **이렇게 작성하면 볼드체가 됩니다.**<br />

    <h3 className="tip-subtitle">인라인 코드</h3>
    인라인 코드를 작성할때는 `code`요소를 사용합니다.<br />
    <h3><a href="https://gist.github.com/ihoneymon/652be052a0727ad59601" className="tip-more" target="_blank" without rel="noopener noreferrer">마크다운 문법 더 알아보자<Icon name="caret right" /></a></h3>
  </div>
);

export default MarkDownTip;

