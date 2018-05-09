import React, {Component} from 'react';
import VideoListItem from "./video_list_item";

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: props.videos
        };
    }

    render = () => {
        //this.setState({videos: this.props.videos});
        let videoItems = this.props.videos.map((video) => {
            return <VideoListItem
                onVideoSelect={this.props.onVideoSelect}
                video={video}
                key={video.etag}
            />;
        });
        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }
}

export default VideoList;