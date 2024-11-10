import React, {Component} from 'react' 

class PostActions extends Component {
    
    render() {
        return (
        <>
            <button onClick={this.props.toggleLike} className="like-button">
                <i className={this.props.liked ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
            <p>{this.props.totalLikes}</p>
            <button className="comment-button">
                <i className="far fa-comment"></i>
            </button>
            <button onClick={this.props.toggleSave} className="save-button">
                <i className={this.props.saved ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
            </button>
        </>   
        );
    }
}

export default PostActions;
