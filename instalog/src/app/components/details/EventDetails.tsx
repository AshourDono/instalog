import React from 'react';
import dayjs from 'dayjs';
import { FaXmark } from 'react-icons/fa6';

import { eventDetails } from './types';
import Loading from './loading';

function EventDetails({
  data,
  error,
  isLoading,
  toggleDetails,
  toggleEvents,
}: {
  data: eventDetails;
  error: boolean;
  isLoading: boolean;
  toggleDetails: () => void;
  toggleEvents: () => void;
}) {
  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <Loading />;
  return (
    <>
      <section
        className={`grid grid-cols-3 w-[962px] h-[289px] m-auto border border-[#DFDFDF] rounded-xl bg-white shadow-[0_2px_5px_0_rgba(0, 0, 0, 0.04)] z-10 absolute`}>
        <span
          className='h-[5px] ms-[930px] mt-3 absolute cursor-pointer'
          onClick={() => {
            toggleDetails();
            toggleEvents();
          }}>
          <FaXmark />
        </span>
        <article className='mt-[30px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>actor</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Name</span>
            <span className='ms-[38px] text-[14px] font-normal'>{data?.actor?.name}</span>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Email</span>
            <span className='ms-[41px] text-[14px] font-normal'>{data?.actor?.email}</span>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Id</span>
            <span className='ms-[63px] text-[14px] font-normal font-mono'>
              {data?.actor?.generatedId}
            </span>
          </div>
        </article>
        <article className='mt-[30px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>action</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>name</span>
            <span className='ms-[38px] text-[14px] font-normal'>{data?.action?.name}</span>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>object</span>
            <span className='ms-[33px] text-[14px] font-normal'>{data?.action?.object}</span>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>id</span>
            <span className='ms-[64px] text-[14px] font-normal font-mono'>
              {data?.action?.generatedId}
            </span>
          </div>
        </article>
        <article className='mt-[30px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>date</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>readable</span>
            <span className='ms-[38px] text-[14px] font-normal'>
              {dayjs(data?.occured_at).format('MMM D, h:mm A')}
            </span>
          </div>
        </article>
        <article className='mt-[18px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>metadata</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>redirect</span>
            <span className='ms-[23px] text-[14px] font-normal'>{data?.redirect}</span>
          </div>
        </article>
        <article className='mt-[18px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>target</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Name</span>
            <span className='ms-[38px] text-[14px] font-normal'>{data?.target?.email}</span>
          </div>
        </article>
      </section>
    </>
  );
}

export default EventDetails;
