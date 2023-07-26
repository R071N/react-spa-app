import React from 'react';

export default function PostTable({ posts, onSort }) {

  return (
    <div className='post__list'>
      <div className='post__list__header'>
        <div onClick={() => onSort('id')}>
          <span>ID</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg></div>
        <div onClick={() => onSort('title')}>
          <span>Заголовок</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg>
        </div>
        <div onClick={() => onSort('body')}>
          <span>Описание</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg>
        </div>
      </div>

      {posts.map(post => (
        <div key={post.id} className='post__item'>
          <div className='post__item__id'>{post.id}</div>
          <div className='post__item__title'>{post.title}</div>
          <div className='post__item__body'>{post.body}</div>
        </div>
      ))}
    </div>
  );

}
