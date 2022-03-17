import React from 'react'
import Proptypes from 'prop-types';

export default function AboutItem(props) {
    // contentOrder and imgOrder props for order of image and content in flex-row
  return (
    <div className="my-5 row featurette d-flex justify-content-center align-content-center">
      <div className={`col-md-7 order-md-${props.contentOrder}`}>
        <h2 className="featurette-heading">{props.firstHeading} <span className="text-muted">{props.mutedText}</span></h2>
        <p className="lead">{props.content}</p>
      </div>
      <div className={`col-md-5 order-md-${props.imgOrder}`}>
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" src={props.imgSource} aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
      </div>
    </div>
  )
}

// Datatypes of props
AboutItem.propTypes = {
    contentOrder: Proptypes.number,
    imgOrder: Proptypes.number,
    imgSource: Proptypes.string,
    firstHeading: Proptypes.string,
    mutedText: Proptypes.string,
    content: Proptypes.string,
};

//Setting default props
AboutItem.defaultProps = {
    contentOrder: 1,
    imgOrder: 2,
    firstHeading: "first featurette heading",
    mutedText: "",
    content:"",
};