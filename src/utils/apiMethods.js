import axios from "axios"

async function homepageData() {
  try {
    const userId = localStorage.getItem('userId')
    const language = localStorage.getItem('languages')
    const options = {
      method: 'GET',
      url: '/api/modules',
      params: { language: language.toLowerCase() },
      headers: {
        'userid': `${userId}`,
        'Content-Type': 'application/json'
      }
  }

    const response = await axios.request(options)
    if (response && response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log('error', error)
  }

}

export { homepageData }