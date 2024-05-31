import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const SinglePlayer = () => {
    const [player, setPlayer] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`)
                const data = await response.json()
                if (!response.ok) {
                    throw new Error("Player not found")
                }
                setPlayer(data.data.player)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error.message)
            }
        }
        getData()
    }, [])


    return (
        <>
            {error ? (
                <h1>{error}</h1>
            ) : player ? (
                <>
                    <div>{player.name}</div>
                    <h6>{player.id}</h6>
                    <h6>{player.breed}</h6>
                </>
            ) : (
                <h1>Loading....</h1>
            )}
        </>
    )
}
export default SinglePlayer
