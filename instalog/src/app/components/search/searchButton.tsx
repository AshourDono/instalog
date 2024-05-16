'use client';
import * as React from 'react';

function SearchButton({ handleSearch, keyword }) {

  return (
    <>
      <div className='w-[650px] flex justify-start text-[#959595]'>
        {/* <label htmlFor='search' className='sr-only'>
            Search
          </label> */}
        <input
          className='w-[650px] h-[43.5px] ps-[11px] rounded-tl-[8px] rounded-bl-[8px] bg-[#F5F5F5]'
          placeholder='Search name or email or action'
          onChange={handleSearch}
          defaultValue={keyword}
        />
      </div>
    </>
  );
}

export default SearchButton;
