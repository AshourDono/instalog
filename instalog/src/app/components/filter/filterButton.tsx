import * as React from 'react';
import { FaFilter } from 'react-icons/fa6';

function FilterButton() {
  return (
    <>
      <div className='w-[87.5px] flex justify-center items-center gap-1 text-[#575757] text-[14px] font-normal uppercase'>
        <FaFilter size='10' />
        <span>filter</span>
      </div>
    </>
  );
}

export default FilterButton;
