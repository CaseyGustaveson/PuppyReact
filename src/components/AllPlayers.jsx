import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AllPlayers = () => {
  const [players, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPlayer, setNewPlayer] = useState({ name: "" });
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.searchTerm);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players"
        );
        const data = await response.json();
        setAllPlayers(data.data.players);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleAddPlayer = () => {
    setAllPlayers([...players, { ...newPlayer, id: players.length + 1 }]);
    setNewPlayer({ name: "" });
  };

  return (
    <>
      {loading ? (
        <h1>Loading players</h1>
      ) : (
        <div>
          <div className="add-player">
            <input
              type="text"
              value={newPlayer.name}
              onChange={(e) => setNewPlayer({ name: e.target.value })}
              placeholder="New player name"
            />
            <button onClick={handleAddPlayer}>Add Player</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {filteredPlayers?.map((player) => (
              <div
                className="player"
                key={player.id}
                onClick={() => navigate(`/player/${player.id}`)}
              >
                <h2>{player.name}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllPlayers;
