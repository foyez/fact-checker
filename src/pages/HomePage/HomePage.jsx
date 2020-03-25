import React, { useState } from 'react'

import SearchBox from '../../components/SearchBox/SearchBox'
import SearchResult from '../../components/SearchResult/SearchResult'
import { firestore, getUrlArticles } from '../../firebase/firebase.utils'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState(null)

  const handleChange = e => {
    let { value } = e.target

    setSearch(value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (search.length <= 3) return

    const fetchArticles = async () => {
      try {
        const urlsRef = await firestore.collection('urls')
        const snapshot = await urlsRef.get()
        console.log(getUrlArticles(snapshot, search))
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticles()

    const fetchArticle = async () => {
      try {
        const transformedString = search.replace(/\//g, v => '\\')
        console.log(transformedString)
        const urlsRef = await firestore.doc(`urls/${transformedString}`)
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
    <div className="container">
      <SearchBox changed={handleChange} submitted={handleSubmit} value={search} />
      <SearchResult result={result} />
    </div>
  )
}

export default HomePage
