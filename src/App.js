import React, {useState} from 'react';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import PostData from "./PostData";
import ListData from "./ListData";
import './App.css';

function App() {
  const [data, setData] = useState({posts: []});

  const addData = (value) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const currentPost = { id: id, title: value };
    setData({
      posts: [...data.posts, currentPost],
    });
  };


  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">Dummybook</a>
      </nav>
      <PostData addData={addData}/>
      <ListData postz={data.posts} />
    </div>
  );
}

export default App;
