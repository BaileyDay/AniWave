import IndexPage from 'components/home/IndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  //Removed the preview page because it requires props that i dont have time to set up rn tbh
  return (
    // <IndexPage preview posts={posts} settings={settings} />
    <h1>Hello</h1>
  )
}
