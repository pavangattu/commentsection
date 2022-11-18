import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {inputValue: '', textValue: '', commentList: [], count: 0}

  addCommentBtn = event => {
    event.preventDefault()

    const initialBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const {inputValue, textValue} = this.state
    const newComment = {
      id: uuidv4(),
      name: inputValue,
      comment: textValue,
      isLiked: false,
      backgroundColor: initialBackgroundColorClassName,
    }

    this.setState(prev => ({
      commentList: [...prev.commentList, newComment],
      inputValue: '',
      textValue: '',
      count: prev.count + 1,
    }))

    console.log('-avaj')
  }

  inputValueChange = event => {
    this.setState({inputValue: event.target.value})
  }

  textValueChange = event => {
    this.setState({textValue: event.target.value})
  }

  clickLike = id => {
    this.setState(prev => ({
      commentList: prev.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prev => ({
      commentList: prev.commentList.filter(each => each.id !== id),
      count: prev.count - 1,
    }))
  }

  render() {
    const {inputValue, textValue, commentList, count} = this.state
    console.log(inputValue)

    console.log(textValue)
    return (
      <div>
        <div className="bg-container">
          <div className="top-container">
            <form className="inner-comments-container">
              <h1>Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.inputValueChange}
                value={inputValue}
              />
              <br />
              <textarea
                type="text"
                placeholder="Your Comment"
                rows="6"
                cols="40"
                onChange={this.textValueChange}
                value={textValue}
              />
              <br />
              <button
                className="button"
                type="button"
                onClick={this.addCommentBtn}
              >
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>

          <hr className="line" />

          <div className="commentsContainer">
            <div className="nav-comment">
              <button className="cmt-count-btn" type="button">
                {count}
              </button>
              <p>Comments</p>
            </div>

            <ul>
              {commentList.map(each => (
                <CommentItem
                  eachComment={each}
                  key={each.id}
                  clickLike={this.clickLike}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
