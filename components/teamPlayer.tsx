import { ChampionPick } from "./teamChampions"

export const TeamPlayer = ({championName, championPosition}: ChampionPick) => {
    return (
        <div key={championName + championPosition}>
            <p>{championName}</p>
            <p>{championPosition}</p>
        </div>
    )
}