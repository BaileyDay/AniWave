import GlobalFooter from '../components/common/GlobalFooter'
import GlobalNav from '../components/common/GlobalNav'
import EmailForm from '../components/common/EmailForm'

const Page404 = () => {
  return (
    <>
      <GlobalNav />
      <section class="mt-20 bg-slate-1 dark:bg-slatedark-1 lg:mt-48">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-blue-11 lg:text-9xl">
              404
            </h1>
            <p class="text-gray-900 mb-4 text-3xl font-bold tracking-tight dark:text-slate-1 md:text-4xl">
              Something&apos;s missing.
            </p>
            <p class="mb-4 text-lg font-light text-slate-9 dark:text-slate-1">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.{' '}
            </p>
            {/* <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
            >
              Back to Homepage
            </a> */}

            <EmailForm />
          </div>
        </div>
      </section>
      <GlobalFooter />
    </>
  )
}

export default Page404
