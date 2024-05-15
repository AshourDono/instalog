'use client';
import useSWR from 'swr';
import dayjs from 'dayjs';

type event = {
  target_name: string | null | undefined;
  action: {
    name: string | null | undefined;
  };
  occured_at: string | Date | null | undefined;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());
// const isLive: boolean = false;

function Table() {
  const { data, error, isLoading } = useSWR(
    '/api/events',
    fetcher
    // isLive ? { refreshInterval: 1 } : undefined
  );

  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <table className='table-auto w-[933px]'>
        <thead className='bg-[#F5F5F5]'>
          <tr className='table-row h-[46px] leading-[16.94px]'>
            <th className='table-cell text-start text-[14px] font-semibold uppercase'>
              <span className='ms-[23px]'>actor</span>
            </th>
            <th className='table-cell text-start text-[14px] font-semibold uppercase'>
              <span className='ms-[18px]'>action</span>
            </th>
            <th className='table-cell text-start text-[14px] font-semibold uppercase'>
              <span className='ms-[18px]'>date</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            (event: event) => (
              <tr className='table-row h-[46px]'>
                <td className='table-cell text-start text-[14px] font-normal'>
                  <span className='ms-[23px] me-[10px] text-[12px] font-bold text-white uppercase w-[9px] h-[15px] px-[8px] py-[5px] rounded-full bg-gradient-to-tl from-[#B325E2] to-[#F3994A]'>
                    {event?.target_name?.at(0)}
                  </span>
                  <span>{event?.target_name}</span>
                </td>
                <td className='table-cell text-start text-[14px] font-normal'>
                  <span className='ms-[18px]'>{event?.action?.name}</span>
                </td>
                <td className='table-cell text-start text-[14px] font-normal'>
                  <span className='ms-[18px]'>
                    {dayjs(event.occured_at).format('MMM D, h:mm A')}
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
