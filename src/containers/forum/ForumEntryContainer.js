import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForumEntry from '../../components/body/forum/ForumEntry';
import { fetchForumEntry } from '../../redux/actions/forumAction';

class ForumEnrtyContainer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchForumEntry(id);
  }

  render() {
    const { title, body } = this.props.forum;
    return (
      <div>
        <ForumEntry title={title} body={body} />
      </div>
    );
  }
}

ForumEnrtyContainer.propTypes = {
  fetchForumEntry: PropTypes.func.isRequired,
  forum: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  forum: state.forums.item,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchForumEntry })(ForumEnrtyContainer);
