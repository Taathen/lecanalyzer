import Image from "next/image";
import { useEffect, useState } from "react"
import { FetchAllChampions } from "../api/riotApi"

export const ChampionGrid = () => {
    const [championData, setChampionData] = useState<any>();
    const fetchChampionData = async () =>{
        const allChampionData = await FetchAllChampions()
        console.log(allChampionData)
        setChampionData(allChampionData?.data)
    }
    const renderPortraits = () => {
        if(!championData) return <></>
        return Object.keys(championData).map((champion: any, index: any) => {
            return <div>
                <Image
                    src={"http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" + champion + ".png"}
                    alt={"Champion image for " + champion}
                    width="52"
                    height="52"
                />
            </div>

        })
    }
    useEffect(() => {
        fetchChampionData()
    }, [])
    return (
        <div>
            {renderPortraits()}
        </div>
    )
}