const ScrollingShare = () => {
  return (
    <>
      <aside
        className="relative ml-auto hidden xl:block"
        aria-labelledby="sidebar-label"
      >
        <div className="sticky top-40 rounded-lg border border-slate-4 bg-slate-3 p-2 dark:border-slatedark-2 dark:bg-slatedark-1">
          <button
            data-tooltip-target="share-twitter"
            className="mb-2 flex items-center rounded-lg bg-slate-3 p-2 text-center text-sm font-medium text-slate-9 hover:bg-slate-4 focus:outline-none focus:ring-4 focus:ring-slate-3 dark:bg-slatedark-1 dark:text-slate-1 dark:hover:bg-slatedark-2 dark:focus:ring-slatedark-3"
            type="button"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                fill="#1DA1F2"
              />
            </svg>
          </button>
          <button
            data-tooltip-target="share-facebook"
            className="mb-2 flex items-center rounded-lg bg-slate-3 p-2 text-center text-sm font-medium text-slate-9 hover:bg-slate-4 focus:outline-none focus:ring-4 focus:ring-slate-3 dark:bg-slatedark-1 dark:text-slate-1 dark:hover:bg-slatedark-2 dark:focus:ring-slatedark-3"
            type="button"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                  fill="#1877F2"
                />
                <path
                  d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                  fill="slate-1"
                />
              </g>
              <defs>
                <clipPath id="clip0_13664_80011">
                  <rect
                    width="16"
                    height="16"
                    fill="slate-1"
                    transform="translate(0 0.443604)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            data-tooltip-target="share-reddit"
            className="mb-2 flex items-center rounded-lg bg-slate-3 p-2 text-center text-sm font-medium text-slate-9 hover:bg-slate-4 focus:outline-none focus:ring-4 focus:ring-slate-3 dark:bg-slatedark-1 dark:text-slate-1 dark:hover:bg-slatedark-2 dark:focus:ring-slatedark-3"
            type="button"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                  fill="#FF4500"
                />
                <path
                  d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                  fill="slate-1"
                />
              </g>
              <defs>
                <clipPath id="clip0_13664_80014">
                  <rect
                    width="16"
                    height="16"
                    fill="slate-1"
                    transform="translate(0 0.443604)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            data-tooltip-target="share-linkedin"
            className="flex items-center rounded-lg bg-slate-3 p-2 text-center text-sm font-medium text-slate-9 hover:bg-slate-4 focus:outline-none focus:ring-4 focus:ring-slate-3 dark:bg-slatedark-1 dark:text-slate-1 dark:hover:bg-slatedark-2 dark:focus:ring-slatedark-3"
            type="button"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                  fill="#0A66C2"
                />
              </g>
              <defs>
                <clipPath id="clip0_13664_80017">
                  <rect
                    width="16"
                    height="16"
                    fill="slate-1"
                    transform="translate(0 0.443604)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </aside>
      <div
        id="share-twitter"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-slatedark-1 px-3 py-2 text-sm font-medium text-slate-1 opacity-0 shadow-sm transition-opacity duration-300 dark:bg-slatedark-2"
      >
        Share on Twitter
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div
        id="share-facebook"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-slatedark-1 px-3 py-2 text-sm font-medium text-slate-1 opacity-0 shadow-sm transition-opacity duration-300 dark:bg-slatedark-2"
      >
        Share on Facebook
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div
        id="share-reddit"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-slatedark-1 px-3 py-2 text-sm font-medium text-slate-1 opacity-0 shadow-sm transition-opacity duration-300 dark:bg-slatedark-2"
      >
        Share on Reddit
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div
        id="share-linkedin"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-slatedark-1 px-3 py-2 text-sm font-medium text-slate-1 opacity-0 shadow-sm transition-opacity duration-300 dark:bg-slatedark-2"
      >
        Share on LinkedIn
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}

export default ScrollingShare
