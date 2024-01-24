import React, { useState } from "react";

const defaultTeamState = 
{
	team1Num: 1,
	team2Num: 2,
	team1Name: "",
	team2Name: "",
	team1Score: 0,
	team2Score: 0 
}
function GameSetup() 
{	
	const [teamState, setTeamState] = useState(defaultTeamState)	
	
	
		function resetForm() {
			setTeamState(defaultTeamState)
		}	
		
		function handleSubmit(e){
			e.preventDefault()
			fetch('http://localhost:3000/teams', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(teamState)
			})
			.then(res => res.json())
			.then(teamState => setTeamState(teamState))
			console.log(teamState)
		}
		
		const {team1Name, team2Name, team1Score, team2Score, team1Num=1, team2Num=2} = teamState
		
		return (
			
			<form className="team-form" onSubmit={handleSubmit}>

      <h2> Enter Each Player's Name</h2>

      <label htmlFor="team1Name">Player 1 Name:</label>
      <input name="team1Name" value={team1Name} />

      <label htmlFor="team2Name">Player 2 Name:</label>
      <input name="team2Name"/>

      <button type="submit" >Submit</button>

    </form>
 
		//{<h1>GameSetup rendered!</h1>}
		
		)
}
	
export default GameSetup;