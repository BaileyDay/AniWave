import React from 'react'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'NarutoFan2000🍥',
      twitterHandle: 'NarutoFan2k',
      tweet:
        "Aniwave has completely changed the way I enjoy anime! Their platform is user-friendly and keeps me up-to-date with all my favorite shows. Can't imagine going back to the old ways! #AniwaveRocks",
      link: 'https://twitter.com/NarutoFan2k/status/1234567890123456789',
    },
    {
      id: 2,
      name: 'SailorMoonLuv🌙',
      twitterHandle: 'SailorMoonLuv',
      tweet:
        "Aniwave is a game-changer! I can watch all my favorite magical girl shows in one place, and their recommendations are spot on. I've discovered so many hidden gems! ✨ #Aniwave",
      link: 'https://twitter.com/SailorMoonLuv/status/2345678901234567890',
    },
    {
      id: 3,
      name: 'OnePunchDude👊',
      twitterHandle: 'OnePunchDude',
      tweet:
        "Aniwave has an amazing collection of action-packed anime series! The platform is smooth, and their community features make discussing shows with fellow fans a blast! I'm a fan for life! 💥 #AniwaveFan",
      link: 'https://twitter.com/OnePunchDude/status/3456789012345678901',
    },
  ]

  return (
    <section id="reviews" className="bg-slate-5 px-4 py-10 lg:py-16">
      <div className="container mx-auto space-y-5 lg:max-w-[72rem]">
        <div>
          <h2 className="text-3xl text-slate-12">Weeb Reviews</h2>
        </div>
        <ul className="flex snap-x snap-mandatory scroll-mr-4 gap-x-4 overflow-x-auto">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="w-11/12 flex-shrink-0 snap-center lg:w-full lg:flex-shrink"
            >
              <a
                className="border-black-50 relative block h-full space-y-5 rounded-[20px] border bg-slate-1 p-6 shadow-md transition duration-300 ease-in-out hover:bg-slate-3 hover:text-current md:rounded-md"
                href={review.link}
                target="_BLANK"
                rel="noopener"
              >
                <div>
                  <h3 className="sub-headline-3">{review.name}</h3>
                  <p className="footnote-1">@{review.twitterHandle}</p>
                </div>
                <div>
                  <p className="body-lg">{review.tweet}</p>
                </div>
                <div className="absolute right-5 top-5 -translate-y-full transform-gpu">
                  <svg
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      d="M27.5.07h-22a5 5 0 0 0-5 5v22a5 5 0 0 0 5 5h22a5 5 0 0 0 5-5v-22a5 5 0 0 0-5-5Z"
                      fill="#1DA1F2"
                    ></path>
                    <path
                      d="M25.5 10.25c-.675.345-1.35.46-2.137.576.787-.461 1.35-1.154 1.575-2.077-.675.462-1.463.693-2.363.923-.675-.692-1.688-1.153-2.7-1.153-2.363 0-4.162 2.307-3.6 4.615-3.037-.115-5.737-1.615-7.65-3.923-1.013 1.73-.45 3.923 1.125 5.077-.563 0-1.125-.231-1.688-.462 0 1.731 1.238 3.346 2.926 3.808-.563.115-1.125.23-1.688.115.45 1.5 1.8 2.654 3.487 2.654-1.35 1.039-3.375 1.616-5.287 1.385 1.688 1.038 3.6 1.73 5.625 1.73 6.863 0 10.688-5.884 10.462-11.307a5.268 5.268 0 0 0 1.913-1.962Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Reviews
