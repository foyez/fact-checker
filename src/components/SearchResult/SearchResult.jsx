import React from 'react'

const SearchResults = ({ result }) => {
  if (result) {
    const { title, body } = result

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  } else if (result === undefined) {
    return <div className="text-primary">No record found for this URL in our system</div>
  }

  return null
}
export default SearchResults
