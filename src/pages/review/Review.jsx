import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ReviewCard from "../../components/reviewcard/ReviewCard";
import Data from "../../assets/data/ReviewData";
import "./Review.scss";

const Review = () => {
  const [data] = useState(Data);
  const [index, setIndex] = useState(0);
  const [reviewData, setReviewData] = useState(data[index]);
  const lastIndex = data.length - 1;

  useEffect(() => {
    setReviewData(data[index]);
  }, [index, data]);

  const nextReview = () => {
    if (index === lastIndex) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevReview = () => {
    if (index === 0) {
      setIndex(lastIndex);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="Review">
      <h2>
        What <span className="A_Green">Our Customers</span> say about us
      </h2>

      <div className="review_holder">
            <button className="R_Left_Button" onClick={prevReview}><AiOutlineArrowLeft /></button>
            <div className="review_card" id="review_card">
              <ReviewCard classContainer="R_container" items={reviewData} />
            </div>
            <button className="R_Right_Button" onClick={nextReview}><AiOutlineArrowRight /></button>
      </div>
      
    </section>
  );
};

export default Review;
