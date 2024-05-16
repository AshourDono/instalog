import React from 'react';
import { Skeleton } from '@nextui-org/skeleton';

function Loading() {
  return (
    <>
      <section className='grid grid-cols-3 w-[962px] h-[289px] m-auto border border-[#DFDFDF] rounded-xl bg-white shadow-[0_2px_5px_0_rgba(0, 0, 0, 0.04)] z-10 absolute'>
        <article className='mt-[30px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>actor</div>
          <div className='mt-[16px] items-baseline'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Name</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[16px] ms-[38px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Email</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[16px] ms-[41px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Id</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[16px] ms-[63px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
        </article>
        <article className='mt-[30px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>action</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>name</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[14px] ms-[38px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>object</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[14px] ms-[33px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
          <div className='mt-[12px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>id</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[14px] ms-[64px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
        </article>
        <article className='mt-[30px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>date</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>readable</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[14px] ms-[38px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
        </article>
        <article className='mt-[18px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>metadata</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>redirect</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[14px] ms-[23px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
        </article>
        <article className='mt-[18px] ms-[41px]'>
          <div className='uppercase text-[14px] text-[#929292] font-medium'>target</div>
          <div className='mt-[16px]'>
            <span className='capitalize text-[14px] text-[#929292] font-normal'>Name</span>
            <Skeleton className='inline-block'>
              <div className='w-[90px] h-[14px] ms-[38px] text-[14px] font-normal bg-[#F8F8F8] rounded-[2px]'></div>
            </Skeleton>
          </div>
        </article>
      </section>
    </>
  );
}

export default Loading;
