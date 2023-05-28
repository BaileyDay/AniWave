import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID
    const token = process.env.BEEHIIV_API_TOKEN

    try {
      const response = await axios.post(
        `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.status === 200 || 201) {
        res.status(200).json({ message: 'Subscription successful' })
      } else {
        res.status(400).json({ message: 'Subscription failed' })
      }
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
