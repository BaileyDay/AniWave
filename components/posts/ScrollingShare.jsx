import { useEffect, useState, useCallback } from 'react'

const socialNetworks = [
  {
    name: 'twitter',
    icon: 'fa-twitter',
    shareUrl: (url, text) =>
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
  },
  {
    name: 'facebook',
    icon: 'fa-facebook',
    shareUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: 'reddit',
    icon: 'fa-reddit-alien',
    shareUrl: (url, title) =>
      `http://www.reddit.com/submit?url=${url}&title=${title}`,
  },
  {
    name: 'pinterest',
    icon: 'fa-pinterest',
    shareUrl: (url, media, description) =>
      `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`,
  },
]

const ScrollingShare = () => {
  const [url, setUrl] = useState('')
  const text = encodeURIComponent('Check this out!') // replace with the text you want to share

  useEffect(() => {
    setUrl(encodeURIComponent(window.location.href)) // the URL you want to share
  }, [])

  const handleShare = useCallback(
    (shareUrl) => {
      window.open(shareUrl(url, text), '_blank')
    },
    [url, text]
  )

  return (
    <>
      <aside
        className="relative ml-auto hidden xl:block"
        aria-labelledby="sidebar-label"
      >
        <div className="sticky top-40 rounded-lg border border-slate-4 bg-slate-3 p-2 dark:border-slatedark-3 dark:bg-slatedark-2">
          {socialNetworks.map((network) => (
            <button
              key={network.name}
              onClick={() => handleShare(network.shareUrl)}
              data-tooltip-target={`share-${network.name}`}
              className="mb-2 flex items-center rounded-lg bg-slate-3 p-2 text-center text-sm font-medium text-slate-9 hover:bg-slate-4 focus:outline-none focus:ring-4 focus:ring-slate-3 dark:bg-slatedark-2 dark:text-slate-1 dark:hover:bg-slatedark-2 dark:focus:ring-slatedark-3"
              type="button"
            >
              <i className={`fa-brands ${network.icon}`}></i>
            </button>
          ))}
        </div>
      </aside>
      {socialNetworks.map((network) => (
        <div
          key={network.name}
          id={`share-${network.name}`}
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-slatedark-1 px-3 py-2 text-sm font-medium text-slate-1 opacity-0 shadow-sm transition-opacity duration-300 dark:bg-slatedark-2"
        >
          {`Share on ${
            network.name.charAt(0).toUpperCase() + network.name.slice(1)
          }`}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      ))}
    </>
  )
}
export default ScrollingShare
