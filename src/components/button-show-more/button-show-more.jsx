import React from 'react';
import PropTypes from 'prop-types';

const ButtonShowMore = (props) => {
  const {onClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick = {(evt) => {
          evt.preventDefault();
          onClick();
        }}
      >Show more</button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonShowMore;
