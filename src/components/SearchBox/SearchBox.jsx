import React from 'react'

const SearchBox = ({ changed, value, submitted }) => {
  return (
    <form onSubmit={submitted} className="row">
      <label htmlFor="inputSearch" className="sr-only">
        Enter your url
      </label>
      <input
        type="search"
        id="inputSearch"
        value={value}
        className="form-control col-md-8"
        placeholder="Enter your url"
        onChange={changed}
      />
      <button className="btn btn-primary offset-md-1 col-md-2">Search</button>
    </form>
  )
}

export default SearchBox
