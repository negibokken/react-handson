import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import { fetchHackerNews } from '../api';

const container = document.querySelector('.js-app');

class NewsItem extends React.Component {
    constructor() {
        super();
    }
    render() {
        let { rank, url, title, by, kids } = this.props;
        return (
            <ul>
                <li>
                    <span>{rank}</span>
                    <span>
                        <a href={url} target="blank">
                            {title}
                        </a>
                    </span>
                    <span>(by {by})</span>
                    <span>{kids.length} comments</span>
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
        if (news.length === 0) {
            return <div />;
        }
        return news.map((ni, idx) => {
            return <NewsItem key={idx} rank={ni.rank} url={ni.url} title={ni.title} by={ni.by} kids={ni.kids || []} />;
        });
    }
}

class Loading extends React.Component {
    render() {
        if (this.props.load) {
            return <p>Now Loading</p>;
        }
        return null;
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            originalNews: '',
            news: '',
            load: true
        };
    }

    componentDidMount() {
        fetchHackerNews().then(news => {
            let newsString = JSON.parse(JSON.stringify(news, null, ' '));
            this.setState({
                originalNews: newsString,
                news: newsString,
                load: false
            });
        });
    }

    onFilterChange() {
        if (this.state.load) {
            return;
        }
        let filterString = this.refs.searchWord.value;
        let news = this.state.originalNews;
        news = news.filter(n => {
            return n.title.includes(filterString);
        });
        this.setState({
            news
        });
    }

    render() {
        return (
            <div>
                search word: <input ref="searchWord" onChange={this.onFilterChange.bind(this)} />
                <Loading load={this.state.load} />
                <News news={this.state.news} />
            </div>
        );
    }
}

ReactDOM.render(<App />, container);
