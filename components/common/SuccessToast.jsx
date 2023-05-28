import { motion } from 'framer-motion'

const SuccessToast = ({ setEmailStatus }) => {
  return (
    <motion.div
      id="toast-success"
      class="fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex items-center justify-center rounded-xl bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
      role="alert"
      style={{ maxWidth: '420px', width: '90%' }} // restricts the width of the toast and makes it responsive
      initial={{ y: 100 }} // starts off the screen (100% of the height)
      animate={{ y: 0 }} // animates to its final position
      exit={{ y: 100 }} // optional: animate back down when component unmounts
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">Email Sign Up Successful!</div>
      <button
        type="button"
        class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 px-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={(e) => {
          e.preventDefault(), setEmailStatus(false)
        }}
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </motion.div>
  )
}

export default SuccessToast
