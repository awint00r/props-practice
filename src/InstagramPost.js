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
                        // Task 7: Pass down the appropriate handler callback functions the child component will need to invoke when/if things are clicked.
                    /> 
                </div>
                <div className="post-caption">
                    {/* Task 8: Make the <p> element below dynamically reference the post information. */}
                    <p><strong>User Name</strong> Caption text here...</p>
                </div>
                <div className="comments-section">
                    <CommentSection
                        // Task 9: Pass down the necessary data and handlers used by the CommentSection component
                    />
                </div>
            </div>
        );
    }
}


export default InstagramPost;
