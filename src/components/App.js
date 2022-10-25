import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(results => {
      this.setState({
        posts: results
      })
      console.log(this.state.posts, '!!!!');
    })
    .catch(e => console.log(e));
  }

  changePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(json => console.log('Object changed', json))
    .catch(e => console.log(e))
  }

  deletePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log('Object delete', json))
    .catch(e => console.log(e))
  }

  render() {
    return (
      <>
        <button onClick={this.changePost}>Change post</button>
        <button onClick={this.deletePost}>Delete post</button>
      </>
    )
  }
}

export default App;