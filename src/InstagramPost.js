import React, { Component } from "react"
import PostActions from "./PostActions.js"
import CommentSection from "./CommentSection.js"

class InstagramPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: props.liked,
            saved: props.saved,
            totalLikes: props.totalLikes,
            caption: props.caption,
            userName: props.userName,
            postImgURL: props.postImgURL,
            userImgURL: props.userImgURL,
            comments: props.comments,
           newComment: ''
        };
    }

    toggleLike = () => {
        this.setState(
            (prevState) => ({ liked: !prevState.liked }),
            this.adjustLikes
        );
    };    

    adjustLikes = () => {
        this.setState((prevState) => ({
            totalLikes: this.state.liked ? prevState.totalLikes + 1 : prevState.totalLikes - 1
        }));
    };
    

    toggleSave = () => {
        this.setState((prevState) => ({ saved: !prevState.saved }));
    };

    handleCommentChange = (event) => {
        this.setState({ newComment: event.target.value });
    };

    handleAddComment = () => {
        this.setState((prevState) => ({
            comments: [...prevState.comments, prevState.newComment],
            newComment: ''
        }));
    };

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <img src={`./images/user/${this.state.userImgURL}`} alt="User Profile" className="profile-pic" />
                    <h2>{this.state.userName}</h2>
                </div>
                <img src={`./images/post/${this.state.postImgURL}`} alt="Post Image" className="post-image" />
                <div className="post-actions">
                    <PostActions 
                        totalLikes={this.state.totalLikes} 
                        liked={this.state.liked}
                        saved={this.state.saved}
                        toggleLike={this.toggleLike}
                        toggleSave={this.toggleSave}
                    /> 
                </div>
                <div className="post-caption">
                    <p><strong>{this.state.userName}</strong>{this.state.caption}</p>
                </div>
                <div className="comments-section">
                    <CommentSection
                       comments={this.state.comments}
                       newComment={this.state.newComment}
                       handleCommentChange={this.state.handleCommentChange}
                       handleAddComment={this.state.handleAddComment}
                    />
                </div>
            </div>
        );
    }
}


export default InstagramPost;
