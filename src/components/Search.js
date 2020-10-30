import React from 'react'

const Search = ({ handleInput, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={ handleSubmit } className="search-form">
                <input
                    type="text"
                    placeholder="Search for a food recipe"
                    className="searchbar"
                    onChange={handleInput}
                />

                <button className="search-button">Submit</button>
            </form>
        </div>
    )
}

export default Search
