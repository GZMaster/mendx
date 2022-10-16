import React from "react";
import "./ReviewCard.scss";

const ReviewCard = ({ items, classContainer, classWrapper  }) => {
  const { image, name, review, id } = items;

  return (
    <article className={classContainer ? classContainer : "Review_Container"}> 
      <div key={id} className={classWrapper ? classWrapper : "Review_Wrapper"}>
        <div className="Review_Top">
          <div className="Review_Image">
            <img src={image} alt={name} />
          </div>
          <h6>{name}</h6>
        </div>
        <div className="Review_Bottom">
          <p>{review}</p>
        </div>
      </div>
    </article>
  );
};

ReviewCard.props = {
  items: {},
  classContainer: "Review_Container",
  classWrapper: "Review_Wrapper",
}

export default ReviewCard;
