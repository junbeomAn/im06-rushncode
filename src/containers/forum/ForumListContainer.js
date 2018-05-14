import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForumList from '../../components/body/forum/ForumList';
import { fetchForumList } from '../../redux/actions/forumAction';

class ForumListContainer extends Component {
  componentWillMount() {
    this.props.fetchForumList();
  }

  render() {
    const { forums } = this.props;
    return <ForumList forums={forums} />;
  }
}

ForumListContainer.propTypes = {
  fetchForumList: PropTypes.func.isRequired,
  forums: PropTypes.array.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  forums: state.forums.items,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchForumList })(ForumListContainer);
