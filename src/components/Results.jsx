            // IMPORTS //
import {Card}  from 'react-bootstrap'


function Results(props){
    const {search} = props
    const {results} = props


    return (
        <div className="Results">
            {!search || !results ? <h4>Player Loading...</h4> : 
            <div className='PlayerResults'>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Player Information</Card.Header>
                    <Card.Body>
                        <Card.Title>{results[0].first_name} {results[0].last_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Position: {results[0].position}</Card.Subtitle>
                        <Card.Text>
                            Team: {results[0].team.full_name}
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </div>
            }
        </div>
    )
}

export default Results