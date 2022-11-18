import {formatDistanceToNow} from 'date-fns'

import './index.css'

console.log(formatDistanceToNow(new Date()))

const CommentItem = props => {
  const {eachComment, clickLike, deleteComment} = props
  const {name, comment, isLiked, id, backgroundColor} = eachComment

  const onClickingLike = () => {
    clickLike(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const imgLikedOrNot = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isLiked ? 'blue-color' : ''

  const firstLetter = name[0]

  return (
    <li className="listContainer">
      <div className="upp-cont">
        <button type="button" className={`button-1 ${backgroundColor}`}>
          {firstLetter}
        </button>
        <div>
          <div className="name-date-cont">
            <h1 className="name-head">{name}</h1>
            <p className="time-para">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="comment-para">{comment}</p>
        </div>
      </div>
      <div className="like-delete-cont">
        {/* <button type="button" onClick={onClickingLike} className={`${likeColor}`>
          <img 
          src={imgLikedOrNot} 
          alt="like" /> 
        </button> */}

        <button
          onClick={onClickingLike}
          className={`${likeColor}`}
          type="button"
        >
          <img src={imgLikedOrNot} alt="like" /> <span>Like</span>
        </button>

        <button type="button" onClick={onDeleteComment} value="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
