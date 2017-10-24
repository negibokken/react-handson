import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ""
    };
  }
  componentDidMount() {
    fetchHackerNews().then((news) => {
      this.setState({
        news: JSON.stringify(news, null, ' ')
      });
    });
  }

  render() {
    return (
      <div>
        <pre>
          { this.state.news }
        </pre>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
