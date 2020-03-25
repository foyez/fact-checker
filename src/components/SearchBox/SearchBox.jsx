import React from 'react'

const SearchBox = ({ changed, value, submitted }) => {
  return (
    <form onSubmit={submitted} className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <div className="form-group w-50 mx-auto mt-3 mb-4">
        <label htmlFor="inputSearch" className="sr-only">
          Enter your url
        </label>
        <input
          type="search"
          id="inputSearch"
          value={value}
          className="form-control"
          placeholder="Enter your url"
          onChange={changed}
        />
      </div>
      <button className="btn btn-lg btn-primary w-25">Check</button>
    </form>
  )
}

export default SearchBox
