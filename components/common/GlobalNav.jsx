import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Logo from '../../components/common/Logo'
import MobileLogo from '../../components/common/MobileLogo'
import WavingTurtle from '../../public/turtlewaving.svg'

const GlobalNav = () => {
  const [navClass, setNavClass] = useState('')
  const controls = useAnimation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [turtleVisible, setTurtleVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavClass(
        `${
          drawerOpen ? 'shadow-none' : 'shadow-md'
        } lg:pt-4 bg-blue-11 lg:bg-blue-1 lg:dark:bg-slatedark-3`
      )
      controls.start({
        scale: 0.95,
        translateY: 0,
        transition: { duration: 0.2 },
      })
    } else {
      setNavClass('bg-blue-11 lg:pt-12 lg:dark:bg-slatedark-1  ')
      controls.start({ scale: 1, translateY: 0, transition: { duration: 0.3 } })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [drawerOpen])

  const turtleAnimation = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)

    setTurtleVisible(!turtleVisible)
  }

  const navItems = [
    { text: 'News', href: '/buy' },
    { text: 'Reviews', href: '/lend' },
    { text: 'Streaming', href: '/borrow' },
    { text: 'Manga', href: '/staking' },
    { text: 'Events', href: '/tax' },
    { text: 'Culture', href: '/nft' },
    { text: 'Merchandise', href: '/news' },
  ]

  const drawerStyle = drawerOpen
    ? 'transform translate-x-0'
    : 'transform -translate-x-full'

  return (
    <motion.div>
      <nav
        className={`fixed inset-x-0 left-0 top-0 z-50 flex h-[74px] w-full items-center  bg-blue-11 px-4 py-4 transition-all delay-100 duration-300 ease-in-out  lg:h-24 lg:bg-transparent lg:px-32  ${navClass}`}
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
                  <button
                    onClick={toggleDrawer}
                    className="group relative lg:hidden"
                  >
                    <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200">
                      <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                        <div
                          className={`h-[2px] w-7 origin-left transform bg-slate-1 transition-all duration-300 ${
                            drawerOpen ? 'translate-x-10' : ''
                          }`}
                        ></div>
                        <div
                          className={`h-[2px] w-7 transform rounded bg-slate-1 transition-all delay-75 duration-300 ${
                            drawerOpen ? 'translate-x-10' : ''
                          }`}
                        ></div>
                        <div
                          className={`h-[2px] w-7 origin-left transform bg-slate-1 transition-all delay-150 duration-300 ${
                            drawerOpen ? 'translate-x-10' : ''
                          }`}
                        ></div>

                        <div
                          className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                            drawerOpen ? 'w-12 translate-x-0' : ''
                          }`}
                        >
                          <div
                            className={`absolute h-[2px] w-5 rotate-0 transform bg-slate-1 transition-all delay-300 duration-500 ${
                              drawerOpen ? 'rotate-45' : ''
                            }`}
                          ></div>
                          <div
                            className={`absolute h-[2px] w-5 -rotate-0 transform bg-slate-1 transition-all delay-300 duration-500 ${
                              drawerOpen ? '-rotate-45' : ''
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <a
                  href="https://aniwave.io/"
                  className="justify-center"
                  title="AniWave Home"
                >
                  <div className="hidden lg:block">
                    <Logo />
                  </div>
                  <MobileLogo />
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
      <div
        className={` container fixed left-0 top-[74px] z-40 h-[110%]  w-full -translate-y-20  bg-blue-11 pl-4 pt-24 transition-transform duration-300 ease-in-out ${drawerStyle}`}
      >
        <div className="container mx-auto lg:max-w-[72rem]">
          <ul
            className="relative z-10 flex flex-col text-slate-1 md:text-center"
            style={{ opacity: 1 }}
          >
            {navItems.map(({ text, href }) => (
              <li
                key={text}
                className="relative inline-block"
                style={{ transform: 'translateX(0%) translateZ(0px)' }}
              >
                <a
                  className="text-white focus:text-milkroad-blue-500 group relative inline-block overflow-hidden py-2 text-5xl font-black hover:text-blue-5"
                  href={href}
                >
                  <span className="relative z-10">{text}</span>
                  <span className="bg-white absolute inset-0 inline-block translate-y-[101%]  transition duration-300 ease-in-out group-hover:translate-y-0 group-focus:translate-y-0"></span>
                </a>
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
              src={WavingTurtle}
              className="z-10 translate-x-28 scale-150 overflow-hidden lg:hidden "
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default GlobalNav
