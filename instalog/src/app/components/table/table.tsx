import dayjs from 'dayjs';
import { FaAngleRight } from 'react-icons/fa6';

import Loading from '@/app/loading';

type event = {
  id: string | null | undefined;
  actor: {
    email: string | null | undefined;
  };
  action: {
    name: string | null | undefined;
  };
  occured_at: string | Date | null | undefined;
};

function Table({
  data,
  error,
  isLoading,
  loadMore,
  currentPage,
  eventIDSetter,
  toggleDetails,
  toggleEvents,
  eventsMode,
}) {
  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <Loading />;
  return (
    <>
      <table className='table-auto w-[931px]'>
        <thead className='bg-[#F5F5F5]'>
          <tr className='table-row h-[46px] leading-[16.94px] text-[14px] font-semibold uppercase'>
            <th className='table-cell text-start w-[308px]'>
              <span className='ms-[23px]'>actor</span>
            </th>
            <th className='table-cell text-start w-[320px]'>
              <span className='ms-[18px]'>action</span>
            </th>
            <th className='table-cell text-start w-[270px]'>
              <span className='ms-[18px]'>date</span>
            </th>
            <th className='table-cell text-start w-[35px]'>
              <span className='me-[26.33px]'></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.events?.map((eventData: event) => (
            <tr className='table-row h-[46px] bg-white hover:bg-[#FBFBFB]' key={eventData.id}>
              <td className='table-cell text-start text-[14px] font-normal'>
                <span className='ms-[23px] me-[10px] text-[12px] font-bold text-white uppercase w-[9px] h-[15px] px-[8px] py-[5px] rounded-full bg-gradient-to-tl from-[#B325E2] to-[#F3994A]'>
                  {eventData?.actor?.email?.at(0)}
                </span>
                <span>{eventData?.actor?.email}</span>
              </td>
              <td className='table-cell text-start text-[14px] font-normal'>
                <span className='ms-[18px]'>{eventData?.action?.name}</span>
              </td>
              <td className='table-cell text-start text-[14px] font-normal'>
                <span className='ms-[18px]'>
                  {dayjs(eventData.occured_at).format('MMM D, h:mm A')}
                </span>
              </td>
              <td className='table-cell text-start text-[14px] font-normal cursor-pointer'>
                <FaAngleRight
                  className='text-[#EEEEEE]'
                  onClick={() => {
                    eventIDSetter(eventData.id);
                    toggleEvents();
                    toggleDetails();
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {eventsMode && (
        <button
          className='w-full flex justify-center items-center h-[52px] bg-[#F5F5F5] text-center uppercase font-semibold text-[14px] text-[#616161] rounded-bl-[14px] rounded-br-[14px] leading-[16.94px] tracking-[2%] disabled:text-[#bdb8b8]'
          onClick={loadMore}
          disabled={data?.loadMoreTries === currentPage}>
          load more
        </button>
      )}
    </>
  );
}

export default Table;
