'use client';
import * as React from 'react';
import { DebouncedState } from 'use-debounce';

function SearchButton({
  handleSearch,
  keyword,
}: {
  handleSearch: DebouncedState<
    (event: {
      [x: string]: any;
      target: {
        value: React.SetStateAction<string>;
      };
    }) => void
  >;
  keyword: string;
}) {
  return (
    <>
      <div className='w-[737.5px] flex justify-start text-[#959595]'>
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
