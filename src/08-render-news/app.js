import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

const container = document.querySelector('.js-app');

class NewsItems extends React.Component {
  constructor() {
    super();
  }
  render() {
    let rank = this.props.rank
    let url = this.props.url;
    let title = this.props.title
    let by = this.props.by
    let kids = this.props.kids;
    return (
      <ul>
        <li>
          <span>{rank}</span>
          <span><a href={url} target="blank">{title}</a></span>
          <span>(by {by})</span>
          <span>{kids}comments</span>
        </li>
      </ul>
    );
  }
}

class News extends React.Component {
  constructor() {
    super();
  }
  render() {
    let news = this.props.news;
    return news.map((ni) => {
      return <NewsItem
          rank={ni.rank}
          url={ni.url}
          title={ni.title}
          by={ni.by}
          kids={ni.kids}
        />
    });
  }
}

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
    console.log(this.props.news);
  }

  render() {
    return (
      <div>
        {/* サーバーからデータを取得したあとは、NewsのComponentを表示して、その中でNewsItemのComponentを表示してみましょう */}
        <News news={this.props.news} />
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
