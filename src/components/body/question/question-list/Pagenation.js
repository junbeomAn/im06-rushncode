import React from 'react';

const Pagenation = ({
  updateStartEndPage, makeAsync, count, currentPage, start, end,
}) => {
  const per = 20;
  const total = Math.ceil(count / per);
  const array = [];
  for (let i = 0; i < total; i++) {
    array.push(i + 1);
  }
  const keyword = window.location.href.split('?q=')[1];
  const target = array.slice(start, end);
  return (
    <div>
      <ul className="pagination questionPagenation">
        <li id="prev" className="page-item">
          <button
            className="item page-link"
            onClick={() => {
              makeAsync(1);
              console.log(makeAsync);
            }}
          >
            처음
          </button>
        </li>
        <li id="prev" className="page-item">
          <button
            className="item page-link"
            onClick={() => {
              if (currentPage === 1) return alert('첫번째 페이지 입니다.');
              if (currentPage % 10 === 1) {
                const s = start - 10;
                const e = end - 10;
                updateStartEndPage(s, e);
              }
              makeAsync(currentPage - 1);
            }}
          >
            이전
          </button>
        </li>
        {target.map(val => (
          <li id={keyword ? `p${keyword}${val}` : `p${val}`} className="page-item" key={val}>
            <button
              className="item page-link"
              onClick={() => {
                makeAsync(val);
              }}
            >
              {val}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button
            className="item page-link"
            onClick={() => {
              if (currentPage === array.length) return alert('마지막 페이지 입니다.');
              if (currentPage % 10 === 0) {
                const s = start + 10;
                const e = end + 10;
                updateStartEndPage(s, e);
              }
              makeAsync(currentPage + 1);
            }}
          >
            다음
          </button>
        </li>
        <li className="page-item">
          <button
            className="item page-link"
            onClick={() => {
              makeAsync(target.length);
            }}
          >
            끝
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagenation;
