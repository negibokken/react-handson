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
        console.log(news);
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
            news: '',
            load: true
        };
    }

    componentDidMount() {
        fetchHackerNews().then(news => {
            this.setState({
                news: JSON.parse(JSON.stringify(news, null, ' ')),
                load: false
            });
        });
    }

    render() {
        return (
            <div>
                <Loading load={this.state.load} />
                <News news={this.state.news} />
            </div>
        );
    }
}

ReactDOM.render(<App />, container);
