import React from 'react'

const reviews = [
  {
    id: 1,
    title: "My Hero Academia: World Heroes' Mission",
    imageUrl:
      'https://www.funimationfilms.com/wp-content/uploads/2021/08/MHA_WHM_Concept_KeyArt_TrailerPoster.jpg',
    rating: 4,
    tagline: 'The mission to save the world begins.',
    releaseDate: '2021-08-06',
    runtime: 104,
    overview:
      'A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academy.',
  },
  {
    id: 2,
    title: 'Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train',
    imageUrl:
      'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fhiddenremote.com%2Ffiles%2Fimage-exchange%2F2021%2F10%2Fie_78057-850x560.jpeg',
    rating: 4.8,
    tagline: 'With your blade, bring an end to the nightmare.',
    releaseDate: '2020-10-16',
    runtime: 117,
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, board the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
  },
  {
    id: 3,
    title: 'Attack on Titan: Chronicle',
    imageUrl: 'https://pbs.twimg.com/media/El-BswYXYAIyncK.jpg:large',
    rating: 4.5,
    tagline: 'The battle for freedom never ends.',
    releaseDate: '2020-07-17',
    runtime: 120,
    overview:
      "A compilation film, recapping the first three seasons of Attack on Titan. The story is set in a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid beings who devour humans seemingly without reason. The story initially centers on Eren Yeager, his adopted sister Mikasa Ackerman, and their childhood friend Armin Arlert, who join the military to fight the Titans after their hometown is invaded and Eren's mother is eaten.",
  },
  {
    id: 4,
    title: 'Jujutsu Kaisen 0',
    imageUrl:
      'https://sundial.csun.edu/wp-content/uploads/2022/04/E1t0jaoDjKNvu7o6KsnR86sr7k0VRtWMMeX4thfB-900x506.jpeg',
    rating: 4.3,
    tagline: 'A tale of curses and sorcery.',
    releaseDate: '2021-12-24',
    runtime: 105,
    overview:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him and save his friend?",
  },
  {
    id: 5,
    title: 'Weathering with you in',
    imageUrl:
      'https://cdn.theatlantic.com/thumbor/ivQgFYHzm7KNvBzNWr6DixsxHyw=/0x0:1023x575/960x540/media/img/mt/2020/01/weathering/original.jpg',
    rating: 4.7,
    tagline: 'A story about the secret of this world that only I and she know.',
    releaseDate: '2019-07-19',
    runtime: 112,
    overview:
      'Hodaka, a high school boy who moves from his isolated island home to the city of Tokyo, who immediately becomes broke! After finally finding work at a shady occult magazine, the sky rains every day until amidst the hustle and bustle of the big city, he meets a young woman called Hina. She lives a cheerful life with her younger brother, but also has a certain power: to stop the rain and clear the sky.',
  },
]

const Stars = ({ rating }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<i key={i} className="fas fa-star text-white"></i>)
    } else if (i - rating > 0 && i - rating < 1) {
      stars.push(<i key={i} className="fas fa-star-half-alt text-white"></i>)
    } else {
      stars.push(<i key={i} className="far fa-star text-white"></i>)
    }
  }

  return <div className="flex space-x-1">{stars}</div>
}

const AnimeReviews = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:max-w-[90rem]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-sky-500 dark:text-white">
          Rare Rates 🏆
        </h2>
        <h2 className="text-3xl font-bold text-slate-900  dark:text-white">
          Anime Reviews
        </h2>
      </div>

      <ul className="flex snap-x snap-mandatory scroll-mr-4 gap-x-4 overflow-x-auto">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="h-[30rem] w-11/12 max-w-sm flex-shrink-0 snap-center overflow-hidden rounded-xl bg-white py-12 dark:bg-zinc-900 lg:w-full lg:flex-shrink"
          >
            <div
              className="relative h-full w-full rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${review.imageUrl})` }}
            >
              {/* Add the gradient overlay */}
              <div className="via-s absolute inset-0 rounded-xl bg-gradient-to-t from-zinc-800 to-transparent"></div>

              {/* Add the review information as an overlay on the image */}
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="rounded-xl bg-blue-500 bg-opacity-50 p-2 text-2xl font-bold text-white">
                  {review.title}
                </h3>
                <span className="text-lg text-slate-200">{review.tagline}</span>
                <div className="mt-2 flex items-center space-x-1">
                  <span className="text-4xl font-bold text-white">
                    {review.rating}/5
                  </span>
                  {/* Add the stars component here */}
                  <div className="max-w-[80%] flex-shrink-0">
                    <Stars rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button class="dark:focus:ring-sky-8 group relative mb-2 mr-2 inline-flex w-full  items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 p-0.5 text-sm font-medium text-slate-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white lg:w-auto">
        <span class="relative w-full items-center justify-center rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-900">
          <div class="flex items-center justify-center">
            <span>More Reviews</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="ml-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </span>
      </button>
    </div>
  )
}

export default AnimeReviews
