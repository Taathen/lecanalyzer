import axios from "axios"

export const FetchAllChampions = async () => {
    const request = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
    return request.data
}