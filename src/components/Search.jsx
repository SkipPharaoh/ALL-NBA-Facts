            // IMPORTS //


function Search(props){
    // PROPS //
    const {search} = props
    const {setSearch} = props
    const {getPlayer} = props


    // No Refresh On Submit //
    const HandleSubmit = (e) =>{
        getPlayer(search)
        e.preventDefault()
    }

    // Search Input Keeps Value As Typing //
    const HandleSearchChange = (evt) => {
        console.log(evt.target.value)
        setSearch(evt.target.value)
        getPlayer(evt.target.value)
    }

    return(
        <div className="Search">
            {/* <h2>Search Here</h2> */}
            <form
                className='Search'
                onSubmit={HandleSubmit}
                >
                <input
                    type="search"
                    id="search"
                    placeholder='Search for player...'
                    value={search}
                    onChange={HandleSearchChange}
                />
            </form>
        </div>
    )
}

export default Search