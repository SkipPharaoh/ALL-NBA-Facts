            // IMPORTS //


function Results(props){
    const {search} = props
    const {results} = props


    return (
        <div className="Results">
            {!search || !results ? <h3>Player Loading...</h3> : 
            <div>
                <h3>{results[0].first_name} {results[0].last_name}</h3>
                <h4>Team: {results[0].team.abbreviation}</h4>
                <h4>Position: {results[0].position}</h4>
            </div>
            }
        </div>
    )
}

export default Results