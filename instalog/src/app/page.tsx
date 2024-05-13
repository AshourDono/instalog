import ExportButton from './components/exportToCsv/exportButton';
import FilterButton from './components/filter/filterButton';
import LiveButton from './components/live/liveButton';
import SearchButton from './components/search/searchButton';
import EventTable from './events/page';

export default function Home() {
  return (
    <>
      <main className='grid grid-cols-5 grid-rows-5 gap-4 py-20 px-16'>
        <section className='col-span-2 ps-4'>
          <SearchButton />
        </section>
        <section className='col-start-3'>
          <FilterButton />
        </section>
        <section className='col-start-4'>
          <ExportButton />
        </section>
        <section className='col-start-5 pe-4'>
          <LiveButton />
        </section>
        <section className='col-span-5 row-span-3 row-start-2'>
          <EventTable />
        </section>
      </main>
    </>
  );
}
