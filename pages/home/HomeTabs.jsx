import React, { useState } from 'react'

const TabItem = ({ title, isActive, onClick }) => (
  <li className="mr-2">
    <button
      onClick={onClick}
      className={`inline-block rounded-t-lg p-4 focus:outline-none ${
        isActive
          ? 'border-b-2 border-blue-500 text-blue-500 dark:border-blue-700 dark:text-blue-500'
          : 'border-b-2 border-transparent text-slate-900 dark:border-gray-700  dark:text-white '
      }`}
    >
      {title}
    </button>
  </li>
)

const TabContent = ({ content, isActive, buttonText, buttonLink }) => {
  return isActive ? (
    <div className="mx-auto p-6 lg:w-1/2">
      {content}
      <a href={buttonLink}>
        <button
          type="button"
          className=" via-blue-10 shadow-blue-12/50 focus:ring-blue-3 dark:focus:ring-blue-8 mt-4 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:shadow-blue-500/80 lg:w-1/4"
        >
          {buttonText}
        </button>
      </a>
    </div>
  ) : null
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
    <div className="mx-auto text-slate-900 dark:text-white">
      <div className="mx-auto mt-4 w-full max-w-screen-xl px-4">
        <h2 className=" text-2xl font-bold text-blue-700">The Aniverse 🪐💫</h2>
        <h3 className=" mb-8 text-2xl font-bold text-slate-900 dark:text-white">
          Discover All
        </h3>
      </div>
      <div className=" border-slate-8 mx-auto border-b text-center text-xl font-semibold dark:border-white lg:w-7/12">
        <ul className="flex snap-x snap-mandatory scroll-mr-4 gap-x-4 overflow-x-auto">
          {tabs.map((tab, index) => (
            <>
              <TabItem
                key={index}
                title={tab}
                isActive={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              />
            </>
          ))}
        </ul>
      </div>
      {/* Add the corresponding TabContent components for each tab here */}
      <TabContent
        content={
          <>
            <p className="">
              Dive into the world of soon-to-be-released anime series and
              movies! Be the first to know about new titles, premiere dates, and
              exciting developments.
            </p>
            <p>
              Stay ahead of the curve and discover fresh content that aligns
              with your unique tastes. Join AniWave, your personal guide to the
              future of anime.
            </p>
          </>
        }
        isActive={activeTab === 'Upcoming'}
        buttonText="See Upcoming"
        buttonLink="/upcoming"
      />
      <TabContent
        content={
          <>
            <p>
              Explore our handpicked selection of podcasts that delve into the
              anime universe. Engage with creators, critics, and fans as they
              discuss plotlines, characters, and industry trends.
            </p>
            <p>
              At AniWave, we bring you closer to the voices that matter, making
              your anime experience even more immersive and enjoyable.
            </p>
          </>
        }
        isActive={activeTab === 'Podcasts'}
        buttonText="Explore Podcasts"
        buttonLink="/podcasts"
      />
      <TabContent
        content={
          <>
            <p>
              Delve into the rich world of manga with AniWave. Our manga section
              is dedicated to providing you with the latest releases, reviews,
              and recommendations.
            </p>
            <p>
              Whether you&apos;re a casual reader or a die-hard fan, AniWave is
              your one-stop-shop for discovering the best of manga and expanding
              your collection.
            </p>
          </>
        }
        isActive={activeTab === 'Manga'}
        buttonText="Discover Manga"
        buttonLink="/manga"
      />
      <TabContent
        content={
          <>
            <p>
              Get up close and personal with the creators and artists behind
              your favorite anime and manga.
            </p>
            <p>
              AniWave presents exclusive interviews, offering insights into the
              creative process, inspirations, and challenges faced by industry
              professionals. Stay connected to the heart of the anime world with
              AniWave.
            </p>
          </>
        }
        isActive={activeTab === 'Interviews'}
        buttonText="Read Interviews"
        buttonLink="/interviews"
      />
      <TabContent
        content={
          <>
            <p>
              Never miss out on anime conventions, screenings, or meetups
              happening near you! AniWave&apos;s Events tab keeps you informed
              about the latest happenings in the world of anime.
            </p>
            <p>
              From industry conferences to local gatherings, our curated events
              list ensures that you always have a chance to connect with fellow
              fans.
            </p>
          </>
        }
        isActive={activeTab === 'Events'}
        buttonText="Browse Events"
        buttonLink="/events"
      />
      <TabContent
        content={
          <>
            <p>
              Become a part of AniWave&apos;s thriving community of passionate
              anime enthusiasts. Share your thoughts, opinions, and artwork with
              like-minded individuals from around the world.
            </p>
            <p>
              Engage in lively discussions, participate in fan activities, and
              make new friends. AniWave is your gateway to a vibrant and
              inclusive anime community.
            </p>
          </>
        }
        isActive={activeTab === 'Community'}
        buttonText="Join Community"
        buttonLink="/community"
      />
    </div>
  )
}

export default HomeTabs
