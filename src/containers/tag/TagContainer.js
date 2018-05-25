import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchQuestionTag, fetchSortedByTag } from './../../redux/actions/questionAction';
import { Tag } from '../../components';

class TagContainer extends Component {
  state = {
    keyword: '',
  };

  componentDidMount() {
    this.props.fetchQuestionTag();
  }

  tagSearch = (event) => {
    if (event.key === 'Enter') {
      const { keyword } = this.state;
      const isExist = this.isTagExist(keyword);
      if (isExist) {
        this.props.history.push(`/sort/tag/${keyword}`)
      } else {
        alert('검색결과가 없습니다.');
      }
    }
  }

  isTagExist = (keyword) => {
    const { tags } = this.props;
    const searchResult = tags.filter(item => item.tag.includes(keyword));

    return !!searchResult.length;
  }

  valueChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  }

  render() {
    const { tags } = this.props;
    // console.log(this.props);
    // console.log(tags, items);
    return (
      <div>
        {tags.length
          ? <Tag tags={tags} tagSearch={this.tagSearch} valueChange={this.valueChange} />
          : <Loader active inline="centered" />
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { tags } = state.questions;
  return { tags };
};

export default connect(mapStateToProps, { fetchQuestionTag, fetchSortedByTag })(TagContainer);
