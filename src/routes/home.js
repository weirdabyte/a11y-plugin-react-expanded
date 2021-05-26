import React from 'react';
import TextSection from '../components/TextSection';

const Home = () => {
  return (
    <div className='content-wrapper'>
      <TextSection
        image='./images/computer.png'
        rubrik='Rubrik 1'
        alt='Computer'
      />
      <TextSection image='./images/eagle.png' rubrik='Rubrik 2' alt='Eagle' />
      <TextSection image='./images/tree.png' rubrik='Rubrik 3' alt='Tree' />
    </div>
  );
};

export default Home;
