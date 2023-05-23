import React from 'react'
import Image from 'next/image'
import sideImage from '../public/side.png'

import Head from 'next/head'

const Subscribe = () => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Subscribe</title>
      </Head>
      <div className="relative -mt-12 bg-gradient-to-br from-blue-9 to-sky-9 lg:h-2/3 lg:w-full ">
        <div className="  flex items-center justify-center">
          <div className="relative -left-16 top-24 lg:-left-64 lg:top-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 867 254"
              className="mr-3 h-12 w-auto fill-slate-1 md:h-16  "
            >
              <path d="M815.8 2.4c-15.7.6-28.9 1.3-29.1 1.6-.8.8-26.9 221.2-26.3 221.7.6.6 68.8-1.5 75.2-2.3l4.2-.5 1.2-11.2c.6-6.2 1.4-12.3 1.7-13.6l.6-2.4-23.5.7-23.4.7 1.3-10.6c.7-5.8 1.5-11 1.8-11.5.4-.6 5.9-1 12.3-1s14.7-.3 18.3-.6l6.7-.7 1.1-9.6c.7-5.3 1.4-11.5 1.7-13.8l.6-4.2-12.8.5c-7.1.2-15.5.6-18.6.8-5.7.4-5.8.4-5.8-2.3 0-1.5 2.9-27.2 6.5-57.1 3.6-29.9 6.5-54.9 6.5-55.6 0-.9 6-1.4 23-1.9 12.7-.4 23.2-1.1 23.5-1.4.3-.6 3.5-24.5 3.5-26.5 0-.8-14.7-.5-50.2.8zM743.8 4.7c-7.2.3-8.8.7-9.2 2.1-.3.9-9.8 40.8-21.1 88.7-11.4 47.8-20.9 87.2-21.1 87.4-.2.2-.4-39.2-.4-87.7V7h-7.3c-4.1 0-11.5.3-16.5.6l-9.2.7v221.4l10.3-.4c5.6-.3 18.3-.8 28.2-1.1l17.9-.7L741.7 117C756.1 56.2 768 5.9 768 5.2c0-1.2-2.7-1.3-24.2-.5zM584 8c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3-5.8 48.4-10.8 89.8-11.1 91.9l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5zM487.8 14.7c-3.4.4-3.9.8-4.7 4.1-.5 2-8.7 36.3-18.1 76.2-9.4 39.9-17.5 73.4-17.9 74.5-.5 1.1-1.1-28.6-1.5-66-.3-37.4-.9-72.4-1.2-77.7l-.6-9.7-13.7.6c-7.5.3-13.9.8-14.2 1.2-.3.3-9.3 35.7-20 78.6l-19.4 78-.3-77.8L376 19h-7.4c-4 0-11.4.3-16.4.6l-9.2.7v221.5l7.8-.4c4.2-.2 14.2-.7 22.2-1l14.6-.6 14.9-60 15-60 .6 13.4c.4 7.3.7 27.7.8 45.3.1 17.6.4 38.4.8 46.2l.6 14.2 13.1-.5c7.2-.2 17.2-.7 22.1-1l9.1-.6 26.2-110.6C505.2 65.3 517 15.2 517 14.7c0-.7-22.2-.7-29.2 0zM306.3 20.9c-8.3.3-15.4.8-15.6 1.1-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.5-.5 26.3-215.9 26.3-219.9 0-1.5-.3-2.6-.7-2.5-.5.1-7.6.4-16 .7zM236.9 23.7l-6.6.4-.6 4.2c-.3 2.3-3.6 30.2-7.3 61.9-3.8 31.8-7.1 57.8-7.4 57.8-.3 0-6.1-27.3-13-60.8l-12.5-60.7h-15.2c-8.3 0-15.4.2-15.6.5-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.3-.2 3.8-28.2 7.8-62.1 4.1-33.9 7.5-61.9 7.7-62.1.2-.1 5.7 25.7 12.3 57.4 6.5 31.7 12.2 59.5 12.7 61.7l.9 4 14.7-.3c8.1-.2 15.1-.7 15.5-1.2.8-.7 26.7-214.3 26.7-219.8 0-2.1-.2-2.2-9.7-2-5.4.1-12.8.3-16.4.5zM75 26c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3C5.7 205.9.7 247.3.4 249.4l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5z" />
            </svg>
          </div>
        </div>

        <svg
          id="visual"
          viewBox="0 0 900 600"
          preserveAspectRatio="none"
          className="z-20 fill-slate-1 dark:fill-slatedark-1 lg:hidden lg:w-[50%]"
        >
          <path
            d="M0 458L37.5 435C75 412 150 366 225 363.8C300 361.7 375 403.3 450 393.7C525 384 600 323 675 274.3C750 225.7 825 189.3 862.5 171.2L900 153L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
            strokeLinecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <svg
          id="visual"
          viewBox="100 200 1000 200"
          preserveAspectRatio="none"
          className="hidden w-[150%] fill-slate-1 dark:fill-slatedark-1 lg:block"
        >
          <path
            d="M0 458L37.5 435C75 412 150 366 225 363.8C300 361.7 375 403.3 450 393.7C525 384 600 323 675 274.3C750 225.7 825 189.3 862.5 171.2L900 153L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
            strokeLinecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <div class="lg:-mt-[em] mx-auto mb-24 max-w-screen-xl items-center gap-8 px-4 lg:-mt-[24em] lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16">
        <div className="z-10">
          <Image
            src={sideImage}
            className="hidden rounded-3xl shadow-xl lg:block"
          />
        </div>
        <section class="-mt-16 flex items-center bg-slate-1 dark:bg-slatedark-1 ">
          <div class="z-10 mx-auto max-w-screen-xl px-2">
            <div class="mx-auto max-w-screen-md text-left">
              <h2 class="mb-2 text-5xl font-extrabold tracking-tight dark:text-slatedark-12">
                Immerse yourself in the world of <br class="lg:hidden" />
                <span class="text-blue-9 lg:text-slate-1">Anime</span>{' '}
                <span className="text-slate-12 dark:text-slatedark-12">
                  &amp;{' '}
                </span>
                <span class="text-blue-9 lg:text-slate-1">Manga</span>
              </h2>
              <p class="mb-6 text-sm font-light text-slate-9 dark:text-slate-8 lg:text-lg lg:text-slate-11">
                Sign up for our newsletter to stay up-to-date with the latest
                anime and manga news, reviews, and more. Get access to exclusive
                content and personalized recommendations tailored just for you.
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
                      class="focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:focus:ring-primary-500 block w-full rounded-3xl border border-none bg-slate-3  p-8 pl-10 text-sm text-slate-12 focus:border-blue-8 dark:border-slate-8 dark:placeholder-slate-11 dark:focus:border-blue-8"
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
        </section>
      </div>
    </div>
  )
}

export default Subscribe
