import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forum from '../../components/body/forum/Forum';
import { fetchOne } from '../../store/actions/forumAction';

class ForumContainer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchOne(id);
  }

  render() {
    const { title, body } = this.props.forum;
    return (
      <div>
        <Forum title={title} body={body} />
      </div>
    );
  }
}

ForumContainer.propTypes = {
  fetchOne: PropTypes.func.isRequired,
  forum: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  forum: state.forums.item,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchOne })(ForumContainer);
