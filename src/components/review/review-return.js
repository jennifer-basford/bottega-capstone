import React, { Component } from 'react';
import axios from 'axios';
import ReviewCard from "./reviewCard"

class ReviewReturn extends Component {
    constructor() {
        super();

        this.state = {
            reviewItems: []
        }

        this.getReviewItems = this.getReviewItems.bind(this);
    }

    getReviewItems() {
        axios
        .get("https://honeysuckle-coffee-backend.herokuapp.com/contacts")
        .then(response => {
            this.setState({
                reviewItems: response.data
            })
        }).catch(error => {
            console.log("getReviewItems error", error)
        });
    }

    componentWillMount() {
        this.getReviewItems()
        console.log("Here from review-return")
    }
    
    render() {
        
        return (
            <div className="review-return">
                <div className="review-headline">See What People Are Saying About Us...</div>
                {
                    this.state.reviewItems.map( reviewItem => (

                        <ReviewCard reviewItem={reviewItem} />
                    ))
                }
            </div>
            
        )
    }
}



export default ReviewReturn;