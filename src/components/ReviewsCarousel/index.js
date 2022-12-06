// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  onForward = () => {
    const {reviewsList} = this.props
    const {count} = this.state
    if (reviewsList.length - 1 > count) {
      this.setState(preNum => ({count: preNum.count + 1}))
    }
  }

  onBackward = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(preNum => ({count: preNum.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    console.log(reviewsList.length)
    const userName = reviewsList[count]
    const {imgUrl, username, companyName, description} = userName
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="reviews">
          <button
            type="button"
            className="button"
            onClick={this.onBackward}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          <div className="user-name">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onForward}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
