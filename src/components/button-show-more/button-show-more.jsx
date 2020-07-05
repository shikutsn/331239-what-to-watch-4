import React from 'react';
import PropTypes from 'prop-types';

const ButtonShowMore = (props) => {
  const {onButtonShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick = {(evt) => {
          evt.preventDefault();
          onButtonShowMoreClick();
        }}
      >Show more</button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  onButtonShowMoreClick: PropTypes.func.isRequired,
};

export default ButtonShowMore;
