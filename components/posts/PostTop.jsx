const PostTop = ({ post }) => {
  return (
    <div className="border-solid leading-6">
      <div className="leading-6">
        <h1 className="text-neutral-900 text-[3.00rem] font-medium leading-[3.60rem]">
          {post?.title}
        </h1>
      </div>
      <div className="m-6 leading-6">
        <div className="flex flex-wrap items-center leading-6">
          <div className="leading-6">
            <ul className="leading-6">
              <li className="text-neutral-900 leading-6">
                <span className="leading-6">
                  Writer{' '}
                  <a
                    className="cursor-pointer font-semibold leading-6"
                    href="https://milkroad.com/authors/chisom-maduonuorah"
                  >
                    Chisom Maduonuorah
                  </a>
                </span>
              </li>
              <li className="text-neutral-900 ml-1 leading-6">
                <span className="leading-6">and</span>
                <span className="leading-6">
                  Editor{' '}
                  <a
                    className="cursor-pointer font-semibold leading-6"
                    href="https://milkroad.com/authors/shannon-ullman"
                  >
                    Shannon Ullman
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="pl-6 leading-6">
            <ul className="leading-6">
              <li className="text-neutral-900 leading-6">
                <span className="leading-6">March 8, 2023</span>
              </li>
              <li className="text-neutral-900 ml-2 leading-6">
                <span className="text-neutral-600 leading-6">•</span>
                <span className="leading-6">9 Min Read</span>
              </li>
            </ul>
          </div>
          <div className="pl-6 leading-6">
            <button className="text-blue-700 inline-block w-44 cursor-pointer items-start text-center font-semibold leading-4">
              Advertising Disclosure
            </button>
          </div>
        </div>
      </div>
      <div className="m-6 leading-6">
        <div className="bg-zinc-50 rounded-2xl p-5 text-[0.88rem] leading-5">
          <p className="font-semibold leading-5">The Milk Road Promise</p>
          <p className="m-2 leading-5">
            We’re committed to helping you get smart about crypto. Some articles
            feature products from partners who compensate us, but opinions are
            always our own.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostTop
