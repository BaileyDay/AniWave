import React, { useState } from 'react'

const TabItem = ({ title, isActive, onClick }) => (
  <li className="mr-2">
    <button
      onClick={onClick}
      className={`inline-block rounded-t-lg p-4 focus:outline-none ${
        isActive
          ? 'border-b-2 border-blue-9 text-blue-9 dark:border-blue-11 dark:text-blue-9'
          : 'dark:border-gray-700 border-b-2 border-transparent text-slate-12  dark:text-slatedark-12 '
      }`}
    >
      {title}
    </button>
  </li>
)

const TabContent = ({ content, isActive }) => {
  return isActive ? <div className="p-6">{content}</div> : null
}

const HomeTabs = () => {
  const tabs = [
    'Upcoming',
    'Podcasts',
    'Manga',
    'Interviews',
    'Events',
    'Community',
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="mx-auto">
      <div className="mx-auto mt-4 w-full max-w-screen-xl px-4">
        <h2 className="dark:text-white text-2xl font-bold text-blue-11">
          The Aniverse 🪐💫
        </h2>
        <h3 className="dark:text-white mb-8 text-2xl font-bold text-slate-12 dark:text-slatedark-12">
          Discover All
        </h3>
      </div>
      <div className=" mx-auto border-b border-slate-8 text-center text-xl font-semibold dark:border-slatedark-12 lg:w-7/12">
        <ul className="flex snap-x snap-mandatory scroll-mr-4 gap-x-4 overflow-x-auto">
          {tabs.map((tab, index) => (
            <TabItem
              key={index}
              title={tab}
              isActive={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </ul>
      </div>
      {/* Add the corresponding TabContent components for each tab here */}
      <TabContent
        content="Dive into the world of soon-to-be-released anime series and movies! Be the first to know about new titles, premiere dates, and exciting developments. Stay ahead of the curve and discover fresh content that aligns with your unique tastes. Join AniWave, your personal guide to the future of anime."
        isActive={activeTab === 'Upcoming'}
      />
      <TabContent
        content="Explore our handpicked selection of podcasts that delve into the anime universe. Engage with creators, critics, and fans as they discuss plotlines, characters, and industry trends. At AniWave, we bring you closer to the voices that matter, making your anime experience even more immersive and enjoyable."
        isActive={activeTab === 'Podcasts'}
      />
      <TabContent
        content="Delve into the rich world of manga with AniWave. Our manga section is dedicated to providing you with the latest releases, reviews, and recommendations. Whether you're a casual reader or a die-hard fan, AniWave is your one-stop-shop for discovering the best of manga and expanding your collection."
        isActive={activeTab === 'Manga'}
      />
      <TabContent
        content="Get up close and personal with the creators and artists behind your favorite anime and manga. AniWave presents exclusive interviews, offering insights into the creative process, inspirations, and challenges faced by industry professionals. Stay connected to the heart of the anime world with AniWave."
        isActive={activeTab === 'Interviews'}
      />
      <TabContent
        content="Never miss out on anime conventions, screenings, or meetups happening near you! AniWave's Events tab keeps you informed about the latest happenings in the world of anime. From industry conferences to local gatherings, our curated events list ensures that you always have a chance to connect with fellow fans."
        isActive={activeTab === 'Events'}
      />
      <TabContent
        content="Become a part of AniWave's thriving community of passionate anime enthusiasts. Share your thoughts, opinions, and artwork with like-minded individuals from around the world. Engage in lively discussions, participate in fan activities, and make new friends. AniWave is your gateway to a vibrant and inclusive anime community.

        "
        isActive={activeTab === 'Community'}
      />
    </div>
  )
}

export default HomeTabs
