const FilterTabsComp = ({ initFilterState, filterTab, tabChange }) => {
  return (
    <div className="w-full flex flex-wrap md:flex-none md:w-4/5 space-x-2 my-2">
      <div
        className={
          filterTab.newCase
            ? 'my-1 py-1 px-1 md:px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-1 md:px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() => {
          tabChange({ ...initFilterState, newCase: true })
        }}
      >
        New Cases
      </div>
      <div
        className={
          filterTab.Asia
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({ ...initFilterState, newCase: false, Asia: true })
        }
      >
        Asia
      </div>
      <div
        className={
          filterTab.Africa
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({ ...initFilterState, newCase: false, Africa: true })
        }
      >
        Africa
      </div>
      <div
        className={
          filterTab.Europe
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({ ...initFilterState, newCase: false, Europe: true })
        }
      >
        Europe
      </div>
      <div
        className={
          filterTab.NorthAmerica
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({
            ...initFilterState,
            newCase: false,
            NorthAmerica: true,
          })
        }
      >
        North America
      </div>
      <div
        className={
          filterTab.SouthAmerica
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({
            ...initFilterState,
            newCase: false,
            SouthAmerica: true,
          })
        }
      >
        South America
      </div>
      <div
        className={
          filterTab.Oceania
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({ ...initFilterState, newCase: false, Oceania: true })
        }
      >
        Oceania
      </div>

      <div
        className={
          filterTab.deathPerM
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({
            ...initFilterState,
            newCase: false,
            deathPerM: true,
          })
        }
      >
        Deaths Per 1m
      </div>

      <div
        className={
          filterTab.casesPerM
            ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
            : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
        }
        onClick={() =>
          tabChange({
            ...initFilterState,
            newCase: false,
            casesPerM: true,
          })
        }
      >
        Cases Per 1m
      </div>
    </div>
  )
}

export default FilterTabsComp
