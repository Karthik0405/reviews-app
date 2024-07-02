// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  gettingNextReview = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props

    if (reviewIndex !== reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex + 1,
      }))
    }
  }

  gettingPreviusReview = () => {
    const {reviewIndex} = this.state
    if (reviewIndex > 0) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[reviewIndex]
    return (
      <div className="rewiews-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="rewiewed-user-container">
          <button
            className="arrows"
            onClick={this.gettingPreviusReview}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="user-container">
            <img src={imgUrl} alt={username} className="user-image" />
            <p className="user-image" className="user-name">
              {username}
            </p>
            <p className="company-name">{companyName}</p>
            <p className="rewiew-description">{description}</p>
          </div>
          <button
            className="arrows"
            onClick={this.gettingNextReview}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
