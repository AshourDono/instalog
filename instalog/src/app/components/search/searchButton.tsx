'use client';
import * as React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function SearchButton({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set('query', term) : params.delete('query');
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <div className='w-[650px] h-full'>
        <div className='relative flex flex-1 flex-shrink-0'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <input
            className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
            placeholder='Search name or email or action'
            onChange={event => {
              handleSearch(event.target.value);
            }}
            defaultValue={searchParams.get('query')?.toString()}
          />
        </div>
      </div>
    </>
  );
}

export default SearchButton;
