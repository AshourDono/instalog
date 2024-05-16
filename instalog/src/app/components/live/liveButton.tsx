import * as React from 'react';
import { FaCircle } from 'react-icons/fa6';

function LiveButton({ handleToggleLive, isLive }) {
  return (
    <>
      <div
        className='w-[69.5px] flex justify-center items-center gap-1 text-[14px] text-[#575757] font-normal uppercase cursor-pointer'
        onClick={handleToggleLive}>
        <FaCircle size='8' className={`${isLive ? 'text-[#8F485D]' : 'text-[#575757]'}`} />
        <span>live</span>
      </div>
    </>
  );
}

export default LiveButton;
