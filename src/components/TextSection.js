import React from 'react';
import PropTypes from 'prop-types';

const TextSection = ({ image, alt, rubrik }) => {
  return (
    <section className='textImage'>
      <img src={image} className='textImages' alt={alt} />
      <h1>{rubrik}</h1>
      <p>
        {' '}
        The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

TextSection.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  rubrik: PropTypes.string
};

export default TextSection;
