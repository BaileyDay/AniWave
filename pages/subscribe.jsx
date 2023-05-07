import React from 'react'
import Image from 'next/image'
import sideImage from '../public/side.png'
import Logo from '../components/common/Logo'

const Subscribe = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 z-0 h-1/4 w-full  bg-gradient-to-br from-blue-9  to-sky-9 lg:h-1/2 lg:w-1/2">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative -left-24 -top-8 lg:-left-48 lg:-top-24"></div>
        </div>
        <svg
          id="visual"
          viewBox="0 100 700 600"
          version="1.1"
          className="fill-slate-1 lg:hidden"
        >
          <path
            d="M0 458L37.5 435C75 412 150 366 225 363.8C300 361.7 375 403.3 450 393.7C525 384 600 323 675 274.3C750 225.7 825 189.3 862.5 171.2L900 153L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <svg
          id="visual"
          viewBox="0 200 900 900"
          version="1.1"
          className=" w-[125%] -rotate-12 overflow-hidden fill-slate-1"
        >
          <path
            d="M0 458L37.5 435C75 412 150 366 225 363.8C300 361.7 375 403.3 450 393.7C525 384 600 323 675 274.3C750 225.7 825 189.3 862.5 171.2L900 153L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <div class="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16">
        <div className="z-10">
          <Image
            src={sideImage}
            className="hidden rounded-3xl shadow-xl lg:block"
          />
        </div>
        <section class="bg-slate-1 dark:bg-slatedark-1">
          <div
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div class="z-10 mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 ">
              <div class="mx-auto max-w-screen-md text-left">
                <h2 class="dark:text-white mb-4 text-5xl font-extrabold tracking-tight">
                  Immerse yourself in the world of <br class="lg:hidden" />
                  <span class="text-blue-9">Anime</span> &amp;{' '}
                  <span class="text-blue-9">Manga</span>
                </h2>
                <p class="mb-6 font-light text-slate-9 dark:text-slate-8 lg:text-lg">
                  Sign up for our newsletter to stay up-to-date with the latest
                  anime and manga news, reviews, and more. Get access to
                  exclusive content and personalized recommendations tailored
                  just for you.
                </p>
                <form action="#" class="mx-auto max-w-screen-sm">
                  <div class="mb-3 flex items-center">
                    <div class="relative mr-3 w-full">
                      <label
                        for="member_email"
                        class="mb-2 hidden text-sm font-medium text-slate-12 dark:text-slate-8"
                      >
                        Email address
                      </label>
                      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          class="h-5 w-5 text-slate-8 dark:text-slate-7"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        class="focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:focus:ring-primary-500 block w-full rounded-3xl border border-none bg-slate-3  p-8 pl-10 text-sm text-slate-12 focus:border-blue-8 dark:border-slate-8 dark:placeholder-slate-4 dark:focus:border-blue-8"
                        placeholder="Enter your email"
                        type="email"
                        name="member[email]"
                        id="member_email"
                        required=""
                      />
                    </div>
                    <div></div>
                  </div>
                </form>
                <button
                  type="submit"
                  class="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full cursor-pointer rounded-xl bg-blue-9 px-5 py-6 text-center text-sm font-medium text-slate-1 hover:bg-blue-10 focus:ring-4 focus:ring-blue-7"
                  name="member_submit"
                  id="member_submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Subscribe
