'use client';
import { SetStateAction, useState } from 'react';
import useSWR from 'swr';
import SearchButton from '@/app/components/search/searchButton';
import FilterButton from '@/app/components/filter/filterButton';
import ExportButton from '@/app/components/exportToCsv/exportButton';
import LiveButton from '@/app/components/live/liveButton';
import Table from '@/app/components/table/table';
import EventDetails from '@/app/components/details/EventDetails';
import { useDebouncedCallback } from 'use-debounce';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  let baseUrl = '/api/events';
  const [keyword, setKeyword] = useState('');
  let [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [shouldFetchEvents, setShouldFetchEvents] = useState(true);
  const [shouldFetchDetails, setShouldFetchDetails] = useState(false);


  // const handleGetUrl = () => {
  //   if (keyword) return `/search?query=${keyword}`;
  //   if (id) return `/${id}`;
  //   return `?page=${currentPage}`;
  // };
  const {
    data: eventsData,
    isLoading: eventsLoading,
    error: eventsError,
  } = useSWR(
    keyword ? `${baseUrl}/search?query=${keyword}`:`${baseUrl}?page=${currentPage}`,
    fetcher,
    isLive ? { refreshInterval: 100 } : undefined
  );

  const {
    data: detailsData,
    isLoading: detailsLoading,
    error: detailsError,
  } = useSWR(shouldFetchDetails ? `${baseUrl}/${id}` : null, fetcher);

  const handleSearch = useDebouncedCallback(
    (event: { [x: string]: any; target: { value: SetStateAction<string> } }) => {
      event.preventDefault();
      setKeyword(event.target.value);
    },
    800
  );

  const handleLoadMore = () => {
    setCurrentPage(++currentPage);
  };

  const handleEventID = (eventId: number) => {
    setId(eventId);
  };

  const handleToggleLive = () => {
    setIsLive(!isLive);
  };

  const handleFetchEvents = () => {
    setShouldFetchEvents(!shouldFetchEvents);
  };
  const handleFetchDetails = () => {
    setShouldFetchDetails(!shouldFetchDetails);
  };

  return (
    <main className='flex justify-center items-center min-h-[100vh]'>
      <div className='bg-[#FFFFFF] w-[933px] border-[1px] border-[#F0F0F0] rounded-[15px] shadow-[0px_3px_5px_0px_rgba(0, 0, 0, 0.02)]'>
        <nav className='h-[63px] py-[18px] bg-[#F5F5F5] rounded-tl-[14px] rounded-tr-[14px]'>
          <section className='inline-flex justify-center w-[897px] h-[45px] mx-[17px] border-[1px] border-[#E0E0DF] rounded-[8px] text-center divide-x'>
            <SearchButton keyword={keyword} handleSearch={handleSearch} />
            <FilterButton />
            <ExportButton />
            <LiveButton handleToggleLive={handleToggleLive} isLive={isLive} />
          </section>
        </nav>
        <Table
          data={eventsData}
          error={eventsError}
          isLoading={eventsLoading}
          loadMore={handleLoadMore}
          currentPage={currentPage}
          eventIDSetter={handleEventID}
          toggleDetails={handleFetchDetails}
          toggleEvents={handleFetchEvents}
          eventsMode={shouldFetchEvents}
        />
      </div>

      {shouldFetchDetails && (
        <EventDetails
          data={detailsData}
          error={detailsError}
          isLoading={detailsLoading}
          toggleDetails={handleFetchDetails}
          toggleEvents={handleFetchEvents}
        />
      )}
    </main>
  );
}

export default Home;
