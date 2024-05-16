import * as React from 'react';
import { FaDownload } from 'react-icons/fa6';

function ExportButton(){
    return (
      <>
        <div className='w-[88.5px] flex justify-center items-center gap-1 text-[#575757] text-[14px] font-normal uppercase'>
          <FaDownload size='10'/>
          <span>export</span>
        </div>
      </>
    );
}

export default ExportButton;