// 액션 타입을 정의해줍니다.

// Question + Search
export const FETCH_QUESTION_LIST_BEGIN = 'questionReducer/FETCH_QUESTION_LIST_BEGIN';
export const FETCH_QUESTION_LIST_SUCCESS = 'questionReducer/FETCH_QUESTION_LIST_SUCCESS';
export const FETCH_QUESTION_LIST_FAILURE = 'questionReducer/FETCH_QUESTION_LIST_FAILURE';

export const FETCH_QUESTION_ENTRY_BEGIN = 'questionReducer/FETCH_QUESTION_ENTRY_BEGIN';
export const FETCH_QUESTION_ENTRY_SUCCESS = 'questionReducer/FETCH_QUESTION_ENTRY_SUCCESS';

export const FETCH_QUESTION_TAG = 'questionReducer/FETCH_QUESTION_TAG';

// Question + Sorted TAG
export const FETCH_SORTED_TAG_BEGIN = 'questionReducer/FETCH_SORTED_TAG_BEGIN';
export const FETCH_SORTED_TAG_SUCCESS = 'questionReducer/FETCH_SORTED_TAG_SUCCESS';

// Question-수정
export const ON_TITLE_CHANGE = 'questionReducer/ON_TITLE_CHANGE';
export const ON_REWARD_CHANGE = 'questionReducer/ON_REWARD_CHANGE';
export const ON_BODY_CHANGE = 'questionReducer/ON_BODY_CHANGE';
export const INIT_WRITE_FORM = 'questionReducer/INIT_WRITE_FORM';
export const FETCH_MODIFY_QUESTION = 'questionReducer/FETCH_MODIFY_QUESTION';
export const FETCH_MODIFY_ANSWER = 'questionReducer/FETCH_MODIFY_ANSWER';

// Verfiy
export const VERIFICATION = 'VERIFICATION';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

// Pagenation
export const UPDATE_CURRENT_PAGE = 'pagenationReducer/UPDATE_CURRENT_PAGE';
export const UPDATE_START_END_PAGE = 'pagenationReducer/UPDATE_START_END_PAGE';

// Mypage
export const FETCH_MY_QUESTION_BEGIN = 'mypageReducer/FETCH_MY_QUESTION_BEGIN';
export const FETCH_MY_QUESTION_SUCCESS = 'mypageReducer/FETCH_MY_QUESTION_SUCCESS';
