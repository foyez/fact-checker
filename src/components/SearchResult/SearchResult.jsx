import React from 'react'
import { Link } from 'react-router-dom'

import './SearchResult.scss'

const SearchResults = ({ article }) => {
  if (article) {
    const { id, title, body } = article

    return (
      <div className="mx-auto mt-4 w-50 text-center search-result">
        <Link to={`/article/${id}`}>
          <h1>{title}</h1>
          <p>{body}</p>
        </Link>
      </div>
    )
  } else if (article === undefined) {
    return <h3 className="text-center mt-4">No record found for this URL in our system</h3>
  }

  return null
}
export default SearchResults
