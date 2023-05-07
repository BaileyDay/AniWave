const GlobalFooter = () => {
  return (
    <>
      <svg
        id="visual"
        viewBox="100 450 800 150"
        preserveAspectRatio="none"
        version="1.1"
        className="z-20 w-auto fill-slate-1 dark:fill-slatedark-2"
      >
        <path d="M0 514L37.5 522.2C75 530.3 150 546.7 225 551.3C300 556 375 549 450 530C525 511 600 480 675 475.2C750 470.3 825 491.7 862.5 502.3L900 513L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"></path>
      </svg>
      <footer class="bg-gray-50 dark:bg-slatedark-2 dark:text-slatedark-12">
        <div class="lg:-10 mx-auto max-w-screen-xl p-4 py-6 md:p-8">
          <div class="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div class="col-span-2">
              <a
                href="#"
                class="text-gray-900 dark:text-white mb-2 flex items-center text-2xl font-semibold sm:mb-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  viewBox="0 0 867 254"
                  className="mr-3 h-8 w-auto dark:fill-slate-1 lg:block"
                >
                  <path d="M815.8 2.4c-15.7.6-28.9 1.3-29.1 1.6-.8.8-26.9 221.2-26.3 221.7.6.6 68.8-1.5 75.2-2.3l4.2-.5 1.2-11.2c.6-6.2 1.4-12.3 1.7-13.6l.6-2.4-23.5.7-23.4.7 1.3-10.6c.7-5.8 1.5-11 1.8-11.5.4-.6 5.9-1 12.3-1s14.7-.3 18.3-.6l6.7-.7 1.1-9.6c.7-5.3 1.4-11.5 1.7-13.8l.6-4.2-12.8.5c-7.1.2-15.5.6-18.6.8-5.7.4-5.8.4-5.8-2.3 0-1.5 2.9-27.2 6.5-57.1 3.6-29.9 6.5-54.9 6.5-55.6 0-.9 6-1.4 23-1.9 12.7-.4 23.2-1.1 23.5-1.4.3-.6 3.5-24.5 3.5-26.5 0-.8-14.7-.5-50.2.8zM743.8 4.7c-7.2.3-8.8.7-9.2 2.1-.3.9-9.8 40.8-21.1 88.7-11.4 47.8-20.9 87.2-21.1 87.4-.2.2-.4-39.2-.4-87.7V7h-7.3c-4.1 0-11.5.3-16.5.6l-9.2.7v221.4l10.3-.4c5.6-.3 18.3-.8 28.2-1.1l17.9-.7L741.7 117C756.1 56.2 768 5.9 768 5.2c0-1.2-2.7-1.3-24.2-.5zM584 8c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3-5.8 48.4-10.8 89.8-11.1 91.9l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5zM487.8 14.7c-3.4.4-3.9.8-4.7 4.1-.5 2-8.7 36.3-18.1 76.2-9.4 39.9-17.5 73.4-17.9 74.5-.5 1.1-1.1-28.6-1.5-66-.3-37.4-.9-72.4-1.2-77.7l-.6-9.7-13.7.6c-7.5.3-13.9.8-14.2 1.2-.3.3-9.3 35.7-20 78.6l-19.4 78-.3-77.8L376 19h-7.4c-4 0-11.4.3-16.4.6l-9.2.7v221.5l7.8-.4c4.2-.2 14.2-.7 22.2-1l14.6-.6 14.9-60 15-60 .6 13.4c.4 7.3.7 27.7.8 45.3.1 17.6.4 38.4.8 46.2l.6 14.2 13.1-.5c7.2-.2 17.2-.7 22.1-1l9.1-.6 26.2-110.6C505.2 65.3 517 15.2 517 14.7c0-.7-22.2-.7-29.2 0zM306.3 20.9c-8.3.3-15.4.8-15.6 1.1-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.5-.5 26.3-215.9 26.3-219.9 0-1.5-.3-2.6-.7-2.5-.5.1-7.6.4-16 .7zM236.9 23.7l-6.6.4-.6 4.2c-.3 2.3-3.6 30.2-7.3 61.9-3.8 31.8-7.1 57.8-7.4 57.8-.3 0-6.1-27.3-13-60.8l-12.5-60.7h-15.2c-8.3 0-15.4.2-15.6.5-.4.4-26.7 218.6-26.7 221.4 0 .9 31.8.1 32.7-.8.3-.2 3.8-28.2 7.8-62.1 4.1-33.9 7.5-61.9 7.7-62.1.2-.1 5.7 25.7 12.3 57.4 6.5 31.7 12.2 59.5 12.7 61.7l.9 4 14.7-.3c8.1-.2 15.1-.7 15.5-1.2.8-.7 26.7-214.3 26.7-219.8 0-2.1-.2-2.2-9.7-2-5.4.1-12.8.3-16.4.5zM75 26c-10.9.9-15.8 2.3-24.4 6.8-12 6.3-22.3 18.5-27.2 32.4-.8 2.4-6.1 43.5-11.9 92.3C5.7 205.9.7 247.3.4 249.4l-.6 3.9 16.2-.6c9.7-.3 16.6-1 17-1.6.3-.6 1.9-11.8 3.4-24.8 1.5-13.1 3.2-24.1 3.8-24.4.9-.6 37-2 37.5-1.5.2.1-1.1 11.4-2.7 25.1-1.7 13.6-2.9 24.9-2.8 25 .2 0 7.6-.1 16.6-.3 15.6-.4 16.2-.5 16.7-2.6.2-1.1 5.2-42.6 11-92.1 8-67.5 10.5-91.3 10-95.4-1.1-8.4-4.1-15.5-9.2-21.1-9.7-10.8-22.4-14.7-42.3-13zm11.7 29.5c4.4 2.9 6.3 7.4 6.2 14.5 0 3.6-2.6 27.9-5.8 54l-5.7 47.5-4.9.7c-2.8.3-11.4.8-19.2 1-12.7.3-14.3.2-14.3-1.3 0-.9 2.7-24.2 6-51.9 5.6-46.8 6.3-50.7 8.8-55.3 3.5-6.5 7.9-9.7 14.4-10.7 6.6-1 11.3-.5 14.5 1.5z" />
                </svg>
              </a>
              <p class="text-gray-500 dark:text-gray-400 my-4 font-light">
                AniWave is your ultimate destination for all things anime,
                offering a unique media publishing site and newsletter to keep
                you updated on the latest trends, news, and insights in the
                anime world.
              </p>
              <ul class="mt-5 flex space-x-6">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:mx-auto">
              <h2 class="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                About
              </h2>
              <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About Us
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Discord Server
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:mx-auto">
              <h2 class="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                Most Popular
              </h2>
              <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Top Anime Series
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Upcoming Anime Releases
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Anime Merchandise
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Anime Movie Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:mx-auto">
              <h2 class="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                Explore
              </h2>
              <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Anime Genre Guide
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Studio Spotlights
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Voice Actors Profiles
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:mx-auto">
              <h2 class="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                Community
              </h2>
              <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    AniWave Discord Server
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    AniWave Contests
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Local Anime Events
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    AniWave Collaborations
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="border-gray-200 dark:border-gray-700 my-6 sm:mx-auto lg:my-8" />
          <span className="text-gray-500 dark:text-gray-400 block text-center text-sm">
            © {new Date().getFullYear()}{' '}
            <a href="#" className="hover:underline">
              AniWave™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  )
}

export default GlobalFooter
