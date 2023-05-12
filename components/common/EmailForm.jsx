import React from 'react'

const Subscribe = () => {
  return (
    <>
      <section class="mt-24 rounded-xl bg-slate-3 dark:bg-slate-9">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="text-gray-900 dark:text-white mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              🚀 Join the AniWave Universe! 🌌
            </h2>
            <p class="mx-auto mb-8 max-w-xl font-light text-slate-12 dark:text-slate-8 sm:text-lg md:mb-12">
              By subscribing to our AniWave newsletter, you become a part of our
              close-knit otaku family. You&apos;ll get first dibs on the
              freshest anime news, insider peeks into upcoming releases, and
              exclusive discounts! 🎉 And it&apos;s not just news - we&apos;re
              bringing you engaging stories, discussions, and personal insights
              into the anime world.
            </p>
            <form action="#">
              <div class="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                <div class="relative w-full">
                  <label
                    for="email"
                    class="text-gray-900 dark:text-gray-300 mb-2 hidden text-sm font-medium"
                  >
                    Email address
                  </label>
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="dark:text-slate7 h-5 w-5 fill-slate-9 text-slate-9"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    class="focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-slate-6 bg-slate-4 p-3 pl-10 text-sm text-slate-11 sm:rounded-none sm:rounded-l-lg"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    class="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full cursor-pointer rounded-lg border border-blue-9 bg-blue-11 px-5 py-3 text-center text-sm font-medium text-slate-1 hover:bg-blue-10 focus:ring-4 focus:ring-blue-4 sm:rounded-none sm:rounded-r-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
