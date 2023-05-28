import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function AdvertisingModal({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center px-2"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="z-10 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative max-w-lg transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:p-6">
              <div className="absolute right-0 top-0  pr-4 pt-4 sm:block">
                <button
                  type="button"
                  className="rounded-md bg-white text-neutral-300 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <i class="fa-solid fa-xmark h-6 w-6"></i>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                  <i class="fa-solid fa-circle-exclamation  text-3xl text-yellow-400"></i>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-slate-900"
                  >
                    Advertising Disclosure
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-left text-sm text-slate-700">
                      The selections showcased on this page may be associated
                      with businesses that provide monetary support to AniWave.
                      This support can influence the arrangement and
                      presentation of products on our platform. It is important
                      to note, however, that not every business or product may
                      be represented here. AniWave does not explicitly endorse
                      or advocate for any particular companies.
                    </p>{' '}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
