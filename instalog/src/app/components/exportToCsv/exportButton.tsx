import * as React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { mkConfig, generateCsv, download } from 'export-to-csv';

import { eventDataObject, formattedEventsData, eventsData } from './types';

const csvConfig = mkConfig({ useKeysAsHeaders: true });

const handleFormatEventsData = (data: eventsData): formattedEventsData => {
  let formattedData = data?.map((eventData: eventDataObject) => ({
    id: eventData.id,
    actor_email: eventData.actor.email,
    action_name: eventData.action.name,
    occured_at: eventData.occured_at,
  }));

  return formattedData;
};

const handleExportToCsv = (data: eventsData) => {
  let formattedEventsData = handleFormatEventsData(data);
  const csv = generateCsv(csvConfig)(formattedEventsData);
  download(csvConfig)(csv);
};

function ExportButton({ data }: { data: eventsData }) {
  return (
    <>
      <div
        className='w-[88.5px] flex justify-center items-center gap-1 text-[#575757] text-[14px] font-normal uppercase cursor-pointer'
        onClick={() => {
          handleExportToCsv(data);
        }}>
        <FaDownload size='10' />
        <span>export</span>
      </div>
    </>
  );
}

export default ExportButton;
