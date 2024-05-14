import * as React from 'react';
import { useState, useEffect } from 'react';

function Table() {
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
          <tr className='table-row h-[46px]'>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[23px] me-[10px] text-[12px] font-bold text-white uppercase w-[9px] h-[15px] px-[8px] py-[5px] rounded-full bg-gradient-to-tl from-[#B325E2] to-[#F3994A]'>
                a
              </span>
              <span>ali@instatus.com</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>user.searched_activity_log_events</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>Aug 7, 5:38 PM</span>
            </td>
          </tr>
          {/* <tr className='table-row h-[46px]'>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[23px] me-[20px] uppercase w-[25px] h-[25px] rounded-full bg-gradient-to-r from-[#F3994A] to-[#B325E2]'>
                a
              </span>
              <span>ali@instatus.com</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>user.searched_activity_log_events</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>Aug 7, 5:38 PM</span>
            </td>
          </tr>
          <tr className='table-row h-[46px]'>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px] me-[23.5px] uppercase'>a</span>
              <span>ali@instatus.com</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>user.searched_activity_log_events</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>Aug 7, 5:38 PM</span>
            </td>
          </tr>
          <tr className='table-row h-[46px]'>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px] me-[23.5px] uppercase'>a</span>
              <span>ali@instatus.com</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>user.searched_activity_log_events</span>
            </td>
            <td className='table-cell text-start text-[14px] font-normal'>
              <span className='ms-[18px]'>Aug 7, 5:38 PM</span>
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}

export default Table;
