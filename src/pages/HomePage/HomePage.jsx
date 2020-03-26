import React, { useState } from 'react'

import SearchBox from '../../components/SearchBox/SearchBox'
import SearchResult from '../../components/SearchResult/SearchResult'
import { firestore } from '../../firebase/firebase.utils'

const HomePage = () => {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)

  const handleChange = e => {
    let { value } = e.target

    setUrl(value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (url.length <= 3) return

    // const fetchArticles = async () => {
    //   try {
    //     const urlsRef = await firestore.collection('urls')
    //     const snapshot = await urlsRef.get()
    //     // console.log(getUrlArticles(snapshot, url))
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetchArticles()

    const fetchArticle = async () => {
      try {
        let transformedUrl = url.replace(/^http(s)?:\/\//i, '')
        transformedUrl = transformedUrl.replace(/^www\./i, '')
        transformedUrl = transformedUrl.replace(/\//g, '\\')

        const urlsRef = await firestore.doc(`urls/${transformedUrl}`)
        const snapshot = await urlsRef.get()
        const article = await snapshot.data()

        setResult(article)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticle()
  }

  return (
    <div>
      <SearchBox changed={handleChange} submitted={handleSubmit} value={url} />
      <SearchResult result={result} />
    </div>
  )
}

export default HomePage
