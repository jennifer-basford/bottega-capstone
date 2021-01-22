import React from "react"


const ReviewCard = props => {
    return(
        
        <div className="review-card">
            <div className="review-card_name">{props.reviewItem.name}</div>
            <div className="review-card_comment">{props.reviewItem.comment}</div>
        </div>
       
    )
}

export default ReviewCard