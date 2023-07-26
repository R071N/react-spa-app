import React, { useState, useEffect } from 'react';
import PostTable from './PostTable';
import Pagination from './Pagination';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

export default function Posts() {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const [sort, setSort] = useState({
    id: false,
    title: false,
    body: false,
  });

  const navigate = useNavigate();
  const pageSize = 10;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post => {
        return (
          post.title.includes(search) ||
          post.body.includes(search) ||
          post.id.toString().includes(search)
        );
      })
    );
  }, [search, posts]);

  const handleSearch = value => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageChange = page => {
    navigate(`/posts/${page}`);
    setCurrentPage(page);
  }

  const handleSort = (field) => {

    let direction = true;

    if (sort[field]) {
      direction = sort[field] === true ? false : true;
    }

    setSort(prevState => ({
      ...prevState,
      [field]: direction
    }));

    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (direction === true) {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return b[field] > a[field] ? 1 : -1;
      }
    });

    setFilteredPosts(sortedPosts);
  };

  const indexOfLastPost = currentPage * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / pageSize);

  return (
    <>
      <Search onSearch={handleSearch} />

      <PostTable
        posts={currentPosts}
        onSort={handleSort}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
