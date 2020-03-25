import React from 'react'

const SearchResults = ({ result }) => {
  if (result) {
    const { title, body } = result

    return (
      <div className="text-center mt-4">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  } else if (result === undefined) {
    return <h3 className="text-center mt-4">No record found for this URL in our system</h3>
  }

  return null
}
export default SearchResults
