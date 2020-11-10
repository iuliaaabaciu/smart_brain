import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className='ma4 nt0'>
      <div className='white f4'>
      {`${name}, your current entry count is `}
      </div>
      <div className='white f1'>
        { `${entries}` }
      </div>
    </div>
  );
}

export default Rank;