const SideBar = ({ sectionTitles }) => {
  return (
    <>
      <aside
        className="hidden xl:block xl:w-80 "
        aria-labelledby="sidebar-label"
      >
        <h3 id="sidebar-label" className="sr-only">
          Sidebar
        </h3>
        <div className="dark:bg-gray-800 dark:text-gray-400  sticky top-40 mb-6  rounded-lg  border border-slate-5 bg-slate-1  p-5 font-medium text-slate-12 shadow dark:border-slate-9 dark:border-slatedark-3 dark:bg-slatedark-2">
          <h4 className="mb-2 text-sm font-light uppercase text-slatedark-1 dark:text-slate-1">
            On this page
          </h4>
          <div className="flex items-center py-2">
            <ul>
              {sectionTitles.map(({ id, title }) => (
                <li key={id} className="p-2 font-bold dark:text-slate-1">
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ad section */}

        {/* <div>
          <div className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-slate-2 dark:bg-slate-10">
            <svg
              aria-hidden="true"
              className="text-gray-400 h-8 w-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="mb-2 text-sm font-light text-slate-9 dark:text-slate-8">
            Students and Teachers, save up to 60% on Flowbite Creative Cloud.
          </p>
          <p className="text-xs font-light uppercase text-slate-6 dark:text-slate-7">
            Ads placeholder
          </p>
        </div> */}
      </aside>
    </>
  )
}

export default SideBar
