import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <nav>
          <Link to="/">Playlist Share</Link>
          <Link to="/about">about</Link>
          <Link to="/mylist">나의 플레이리스트</Link>
          <Link to="/create">플레이리스트 만들기</Link>
          <button><Link>로그인</Link></button>
        </nav>
    </div>
  )
}

export default Home;