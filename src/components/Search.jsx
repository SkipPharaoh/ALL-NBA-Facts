            // IMPORTS //


function Search(props){
    // PROPS //
    const {search} = props
    const {setSearch} = props
    const {getPlayer} = props


    // No Refresh On Submit //
    const handleSubmit = (e) =>{
        getPlayer(search)
        e.preventDefault()
    }

    // Search Input Keeps Value As Typing //
    const handleSearchChange = (evt) => {
        console.log(evt.target.value)
        setSearch(evt.target.value)
        getPlayer(evt.target.value)
    }

    return(
        <div className="Search">
            <form
                className='Search'
                onSubmit={handleSubmit}
                >
                <input
                    type="search"
                    id="search"
                    placeholder='Search for player...'
                    value={search}
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    )
}

export default Search