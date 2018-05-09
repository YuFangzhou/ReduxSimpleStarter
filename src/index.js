// Create a new component. This component should
// produce some bug.
// Take this component's bug and put it on the page.

import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBA3ql4NKaD5d-N36nkRwTe9f8Rd6tLZk4';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    render = () => {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={
                        selectedVideo => this.setState({selectedVideo: selectedVideo})
                    }
                    videos={this.state.videos}/>
            </div>
        );
    }

    videoSearch = (term) => {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'));
