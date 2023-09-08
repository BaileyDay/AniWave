import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

import Logo from '../common/Logo'
import MobileLogo from '../common/MobileLogo'
import Yuki from '../../public/yuki.webp'

const HomeNav = () => {
  const [navClass, setNavClass] = useState('')
  const controls = useAnimation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [turtleVisible, setTurtleVisible] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setNavClass(
        `${
          drawerOpen ? 'shadow-none' : 'shadow-md'
        } lg:pt-4 bg-sky-500 lg:bg-white dark:lg:bg-zinc-800`
      )
      controls.start({
        scale: 0.95,
        translateY: 0,
        transition: { duration: 0.2 },
      })
    } else {
      setNavClass('lg:pt-12 lg:dark:bg-zinc-900 bg-transparent')
      controls.start({ scale: 1, translateY: 0, transition: { duration: 0.3 } })
    }
  }, [drawerOpen, controls])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [drawerOpen, handleScroll])

  const turtleAnimation = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)

    setTurtleVisible(!turtleVisible)
  }

  const navItems = [
    { text: 'News', href: '/category/news' },
    { text: 'Reviews', href: '/category/news' },
    { text: 'Streaming', href: '/category/streaming' },
    { text: 'Manga', href: '/category/manga' },
    { text: 'Events', href: '/category/events' },
    { text: 'Culture', href: '/category/culture' },
    { text: 'Merchandise', href: '/category/merchandise' },
  ]

  const drawerStyle = drawerOpen
    ? 'transform translate-x-0'
    : 'transform -translate-x-full'

  return (
    <motion.div>
      <nav
        className={`fixed inset-x-0 left-0 top-0 z-50 flex h-[74px] w-full items-center  px-4 py-4 transition-all  delay-100 duration-300 ease-in-out lg:h-24  lg:px-32  ${navClass}`}
      >
        <motion.div
          className="w-full"
          initial={{ translateY: 0 }}
          animate={controls}
        >
          <div className="container p-4 lg:p-8">
            <div className="mx-auto flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <button
                    onClick={toggleDrawer}
                    className="group relative lg:hidden"
                  >
                    <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200">
                      <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                        <div
                          className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${
                            drawerOpen ? 'translate-x-10' : ''
                          }`}
                        ></div>
                        <div
                          className={`h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 ${
                            drawerOpen ? 'translate-x-10' : ''
                          }`}
                        ></div>
                        <div
                          className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${
                            drawerOpen ? 'translate-x-10' : ''
                          }`}
                        ></div>

                        <div
                          className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                            drawerOpen ? 'w-12 translate-x-0' : ''
                          }`}
                        >
                          <div
                            className={`absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 ${
                              drawerOpen ? 'rotate-45' : ''
                            }`}
                          ></div>
                          <div
                            className={`absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 ${
                              drawerOpen ? '-rotate-45' : ''
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <Link href="/" className="justify-center" title="AniWave Home">
                  <div className="hidden lg:block">
                    <Logo />
                  </div>
                  <MobileLogo />
                </Link>
              </div>
              <div className="flex items-center">
                <div
                  className="hidden items-center justify-between lg:flex lg:w-auto"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-row space-x-8 font-semibold">
                    <li>
                      <Link
                        href="/"
                        title="Home"
                        className="block text-slate-900 hover:text-sky-500 dark:text-white"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/news"
                        title="News"
                        className="block  text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/reviews"
                        title="Reviews"
                        className="block text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/streaming"
                        title="Streaming"
                        className="block text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        Streaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/manga"
                        title="Manga"
                        className="block flex-none text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        Manga
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/events"
                        title="Events"
                        className="block text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/culture"
                        title="Culture"
                        className="block text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        Culture
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/merchandise"
                        title="Merchandise"
                        className="block text-slate-900 hover:text-sky-500 dark:text-white"
                      >
                        Merchandise
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/subscribe"
                  type="button"
                  className="relative ml-8 inline-flex flex-none overflow-hidden rounded-full border border-white p-2 text-center text-sm
  font-light text-white transition duration-300 ease-in-out hover:text-white focus:outline-none focus:ring-4 lg:mr-0 lg:rounded-xl lg:border-2 lg:border-none lg:px-10 lg:py-6 lg:font-semibold"
                >
                  <span className="absolute left-0 top-0 z-0 h-full w-full transition-opacity duration-300 ease-in-out lg:bg-gradient-to-br lg:from-blue-500 lg:to-sky-400"></span>
                  <span className="absolute left-0 top-0 z-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 lg:bg-gradient-to-br lg:from-blue-600 lg:to-sky-500"></span>
                  <span className="relative z-10">Subscribe</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
      <div
        className={` container fixed left-0 top-[74px] z-40 h-[110%]  w-full -translate-y-20  bg-sky-500 pl-4 pt-24 transition-transform duration-300 ease-in-out ${drawerStyle}`}
      >
        <div className="container mx-auto lg:max-w-[72rem]">
          <ul
            className="relative z-10 flex flex-col text-white md:text-center"
            style={{ opacity: 1 }}
          >
            {navItems.map(({ text, href }) => (
              <li
                key={text}
                className="relative inline-block"
                style={{ transform: 'translateX(0%) translateZ(0px)' }}
              >
                <Link
                  className="hover:text-blue-5 group relative inline-block overflow-hidden py-2 text-5xl font-black text-white "
                  href={href}
                >
                  <span className="relative z-10">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <motion.div
            className="fixed bottom-0 left-0 overflow-hidden p-4"
            initial="hidden"
            animate={turtleVisible ? 'visible' : 'hidden'}
            variants={turtleAnimation}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Image
              src={Yuki}
              className="z-10 translate-x-28 scale-100 overflow-hidden lg:hidden "
              alt="Yuki Aniwave mascot"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeNav
