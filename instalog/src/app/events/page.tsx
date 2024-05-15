import * as React from 'react';
import SearchButton from '../components/search/searchButton';
import FilterButton from '../components/filter/filterButton';
import ExportButton from '../components/exportToCsv/exportButton';
import LiveButton from '../components/live/liveButton';
import Table from '../components/table/table';

function Event({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    // page?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <main className='flex justify-center items-center min-h-[100vh]'>
      <div className='bg-[#FFFFFF] w-[933px] border-[1px] border-[#F0F0F0] rounded-[14px]'>
        <nav className='h-[63px] py-[18px] bg-[#F5F5F5] rounded-tl-[15px] rounded-tr-[15px]'>
          <section className='inline-flex justify-center w-[897px] h-[45px] mx-[17px] border-[1px] border-[#E0E0DF] rounded-[8px] text-center divide-x'>
            <SearchButton placeholder={query} />
            <FilterButton />
            <ExportButton />
            <LiveButton />
          </section>
        </nav>
        <Table />
      </div>
    </main>
  );
}

export default Event;
