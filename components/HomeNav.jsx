import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import logoBlack from '../public/logoblack.svg'
import Image from 'next/image'
import logoWhite from '../public/logowhite.svg'

const HomeNav = () => {
  const [navClass, setNavClass] = useState('')
  const controls = useAnimation()

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavClass('shadow-lg lg:pt-4 bg-blue-1')
      controls.start({
        scale: 0.95,
        translateY: 0,
        transition: { duration: 0.2 },
      })
    } else {
      setNavClass('lg:pt-12 ')
      controls.start({ scale: 1, translateY: 0, transition: { duration: 0.3 } })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.div>
      <nav
        className={`fixed inset-x-0 left-0 top-0 z-50 flex h-[74px] w-full items-center  px-4 py-4 transition-all  delay-100 duration-300 ease-in-out lg:h-24 lg:bg-slate-1 lg:px-32 lg:dark:from-slatedark-1 lg:dark:to-slatedark-1 ${navClass}`}
      >
        <motion.div
          className="w-full"
          initial={{ translateY: 0 }}
          animate={controls}
        >
          <div className="container p-4 lg:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <button class="group relative lg:hidden">
                    <div class="ring-gray-300 relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full ring-0 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
                      <div class="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                        <div class="h-[2px] w-7 origin-left transform bg-slate-1 transition-all duration-300 group-focus:translate-x-10"></div>
                        <div class="h-[2px] w-7 transform rounded bg-slate-1 transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
                        <div class="h-[2px] w-7 origin-left transform bg-slate-1 transition-all delay-150 duration-300 group-focus:translate-x-10"></div>

                        <div class="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
                          <div class="absolute h-[2px] w-5 rotate-0 transform bg-slate-1 transition-all delay-300 duration-500 group-focus:rotate-45"></div>
                          <div class="absolute h-[2px] w-5 -rotate-0 transform bg-slate-1 transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <a
                  href="https://cannacove.co/"
                  className="justify-center"
                  title="AniWave Home"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    viewBox="0 0 867 254"
                    className="mr-3 hidden h-8 w-auto lg:block "
                  >
                    <path d="M815.8 2.4c-15.7.6-28.9 1.3-29.1 1.6-.8.8-26.9 221.2-26.3 221.7.6.6 68.8-1.5 75.2-2.3l4.2-.5 1.2-11.2c.6-6.2 1.4-12.3 1.7-13.6l.6-2.4-23.5.7-23.4.7 1.3-10.6c.7-5.8 1.5-11 1.8-11.5.4-.6 5.9-1 12.3-1s14.7-.3 18.3-.6l6.7-.7 1.1-9.6c.7-5.3 1.4-11.5 1.7-13.8l.6-4.2-12.8.5c-7.1.2-15.5.6-18.6.8-5.7.4-5.8.4-5.8-2.3 0-1.5 2.9-27.2 6.5-57.1 3.6-29.9 6.5-54.9 6.5-55.6 0-.9 6-1.4 23-1.9 12.7-.4 23.2-1.1 23.5-1.4.3-.6 3.5-24.5 3.5-26.5 0-.8-14.7-.5-50.2.8zM743.8 4.7c-7.2.3-8.8.7-9.2 2.1-.3.9-9.8 40.8-21.1 88.7-11.4 47.8-20.9 87.2-21.1 87.4-.2.2-.4-39.2-.4-87.7V7h-7.3c-4.1 0-11.5.3-16.5.6l-9.2.7v221.4l10.3-.4c5.6-.3 18.3-.8 28.2-1.1l17.9-.7L741.7 117C756.1 56.2 768 5.9 768 5.2c0-1.2-2.7-1.3-24.2-.5zM584 8c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3-5.8 48.4-10.8 89.8-11.1 91.9l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5zM487.8 14.7c-3.4.4-3.9.8-4.7 4.1-.5 2-8.7 36.3-18.1 76.2-9.4 39.9-17.5 73.4-17.9 74.5-.5 1.1-1.1-28.6-1.5-66-.3-37.4-.9-72.4-1.2-77.7l-.6-9.7-13.7.6c-7.5.3-13.9.8-14.2 1.2-.3.3-9.3 35.7-20 78.6l-19.4 78-.3-77.8L376 19h-7.4c-4 0-11.4.3-16.4.6l-9.2.7v221.5l7.8-.4c4.2-.2 14.2-.7 22.2-1l14.6-.6 14.9-60 15-60 .6 13.4c.4 7.3.7 27.7.8 45.3.1 17.6.4 38.4.8 46.2l.6 14.2 13.1-.5c7.2-.2 17.2-.7 22.1-1l9.1-.6 26.2-110.6C505.2 65.3 517 15.2 517 14.7c0-.7-22.2-.7-29.2 0zM306.3 20.9c-8.3.3-15.4.8-15.6 1.1-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.5-.5 26.3-215.9 26.3-219.9 0-1.5-.3-2.6-.7-2.5-.5.1-7.6.4-16 .7zM236.9 23.7l-6.6.4-.6 4.2c-.3 2.3-3.6 30.2-7.3 61.9-3.8 31.8-7.1 57.8-7.4 57.8-.3 0-6.1-27.3-13-60.8l-12.5-60.7h-15.2c-8.3 0-15.4.2-15.6.5-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.3-.2 3.8-28.2 7.8-62.1 4.1-33.9 7.5-61.9 7.7-62.1.2-.1 5.7 25.7 12.3 57.4 6.5 31.7 12.2 59.5 12.7 61.7l.9 4 14.7-.3c8.1-.2 15.1-.7 15.5-1.2.8-.7 26.7-214.3 26.7-219.8 0-2.1-.2-2.2-9.7-2-5.4.1-12.8.3-16.4.5zM75 26c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3C5.7 205.9.7 247.3.4 249.4l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    viewBox="0 0 867 254"
                    className="ml-12 mr-3 h-8 fill-blue-1 lg:hidden"
                  >
                    <path d="M815.8 2.4c-15.7.6-28.9 1.3-29.1 1.6-.8.8-26.9 221.2-26.3 221.7.6.6 68.8-1.5 75.2-2.3l4.2-.5 1.2-11.2c.6-6.2 1.4-12.3 1.7-13.6l.6-2.4-23.5.7-23.4.7 1.3-10.6c.7-5.8 1.5-11 1.8-11.5.4-.6 5.9-1 12.3-1s14.7-.3 18.3-.6l6.7-.7 1.1-9.6c.7-5.3 1.4-11.5 1.7-13.8l.6-4.2-12.8.5c-7.1.2-15.5.6-18.6.8-5.7.4-5.8.4-5.8-2.3 0-1.5 2.9-27.2 6.5-57.1 3.6-29.9 6.5-54.9 6.5-55.6 0-.9 6-1.4 23-1.9 12.7-.4 23.2-1.1 23.5-1.4.3-.6 3.5-24.5 3.5-26.5 0-.8-14.7-.5-50.2.8zM743.8 4.7c-7.2.3-8.8.7-9.2 2.1-.3.9-9.8 40.8-21.1 88.7-11.4 47.8-20.9 87.2-21.1 87.4-.2.2-.4-39.2-.4-87.7V7h-7.3c-4.1 0-11.5.3-16.5.6l-9.2.7v221.4l10.3-.4c5.6-.3 18.3-.8 28.2-1.1l17.9-.7L741.7 117C756.1 56.2 768 5.9 768 5.2c0-1.2-2.7-1.3-24.2-.5zM584 8c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3-5.8 48.4-10.8 89.8-11.1 91.9l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5zM487.8 14.7c-3.4.4-3.9.8-4.7 4.1-.5 2-8.7 36.3-18.1 76.2-9.4 39.9-17.5 73.4-17.9 74.5-.5 1.1-1.1-28.6-1.5-66-.3-37.4-.9-72.4-1.2-77.7l-.6-9.7-13.7.6c-7.5.3-13.9.8-14.2 1.2-.3.3-9.3 35.7-20 78.6l-19.4 78-.3-77.8L376 19h-7.4c-4 0-11.4.3-16.4.6l-9.2.7v221.5l7.8-.4c4.2-.2 14.2-.7 22.2-1l14.6-.6 14.9-60 15-60 .6 13.4c.4 7.3.7 27.7.8 45.3.1 17.6.4 38.4.8 46.2l.6 14.2 13.1-.5c7.2-.2 17.2-.7 22.1-1l9.1-.6 26.2-110.6C505.2 65.3 517 15.2 517 14.7c0-.7-22.2-.7-29.2 0zM306.3 20.9c-8.3.3-15.4.8-15.6 1.1-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.5-.5 26.3-215.9 26.3-219.9 0-1.5-.3-2.6-.7-2.5-.5.1-7.6.4-16 .7zM236.9 23.7l-6.6.4-.6 4.2c-.3 2.3-3.6 30.2-7.3 61.9-3.8 31.8-7.1 57.8-7.4 57.8-.3 0-6.1-27.3-13-60.8l-12.5-60.7h-15.2c-8.3 0-15.4.2-15.6.5-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.3-.2 3.8-28.2 7.8-62.1 4.1-33.9 7.5-61.9 7.7-62.1.2-.1 5.7 25.7 12.3 57.4 6.5 31.7 12.2 59.5 12.7 61.7l.9 4 14.7-.3c8.1-.2 15.1-.7 15.5-1.2.8-.7 26.7-214.3 26.7-219.8 0-2.1-.2-2.2-9.7-2-5.4.1-12.8.3-16.4.5zM75 26c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3C5.7 205.9.7 247.3.4 249.4l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <div
                  className="hidden items-center justify-between lg:flex lg:w-auto"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-row space-x-8 font-semibold">
                    <li>
                      <a
                        href="#"
                        title="Home"
                        className="block text-slate-12 hover:text-blue-11 dark:text-slate-1"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Strains"
                        className="block  text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Products"
                        className="block text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Grow"
                        className="block text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        Streaming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Health"
                        className="block flex-none text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        Manga
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Legislation"
                        className="block text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="News"
                        className="block text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        Culture
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Culture"
                        className="block text-slate-12 hover:text-blue-11 dark:text-slate-1"
                      >
                        Merchandise
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="ml-8 inline-flex  flex-none rounded-full border border-slate-1 p-2 text-center text-sm
                  font-light text-blue-1 transition duration-300  ease-in-out hover:text-slate-1 focus:outline-none focus:ring-4 lg:mr-0 lg:rounded-xl lg:border-2 lg:border-none lg:bg-gradient-to-br lg:from-blue-10 lg:to-sky-10 lg:px-10  lg:py-6 lg:font-semibold lg:hover:from-blue-11 lg:hover:to-sky-11"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.div>
  )
}

export default HomeNav
