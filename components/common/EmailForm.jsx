import Link from 'next/link'
import React from 'react'
import SuccessToast from './SuccessToast'
import { useState } from 'react'

const Subscribe = () => {
  const [emailStatus, setEmailStatus] = useState(false)
  const submitSubscription = async (email) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setEmailStatus(true)
      } else {
        setEmailStatus(false)
      }
    } catch (error) {
      console.log('Subscription error', error)
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    submitSubscription(email)
  }
  return (
    <>
      {emailStatus && <SuccessToast setEmailStatus={setEmailStatus} />}
      <section class="rounded-xl bg-slate-100 dark:bg-zinc-800">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ride the Anime Wave with AniWave! 🌊 🚀
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
              Be the first to explore latest anime & manga news, enjoy exclusive
              discounts, and immerse in a vibrant community. Transform your
              inbox - sign up today!
            </p>
            <form action="#" onSubmit={handleFormSubmit}>
              <div class="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                <div class="relative w-full">
                  <label
                    for="email"
                    class="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-sky-500 dark:focus:ring-sky-500 sm:rounded-none sm:rounded-l-lg"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    defaultValue=""
                    data-form-type="email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full cursor-pointer rounded-lg border border-sky-400 bg-sky-500 px-5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600  focus:ring-0 dark:bg-sky-600  dark:hover:bg-sky-700 sm:rounded-none sm:rounded-r-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div class="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
                We care about the protection of your data.{' '}
                <Link
                  href="/privacy-policy"
                  class="font-medium text-sky-600 hover:underline dark:text-sky-500"
                >
                  Read our Privacy Policy
                </Link>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
