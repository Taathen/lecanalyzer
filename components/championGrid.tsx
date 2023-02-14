import Image from "next/image";
import { useEffect, useState } from "react";
import { FetchAllChampions } from "../api/riotApi";

interface ChampionGridProps {
  selectChampion: (championName: string) => void;
}

export const ChampionGrid = ({ selectChampion }: ChampionGridProps) => {
  const [championData, setChampionData] = useState<any>();
  const fetchChampionData = async () => {
    const allChampionData = await FetchAllChampions();
    setChampionData(allChampionData?.data);
  };
  const renderPortraits = () => {
    if (!championData) return <></>;
    return Object.keys(championData).map((champion: any, index: any) => {
      return (
        <div onClick={() => selectChampion(champion)} key={champion + index}>
          <Image
            src={
              "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" +
              champion +
              ".png"
            }
            alt={"Champion image for " + champion}
            width="72"
            height="72"
            placeholder="empty"
          />
        </div>
      );
    });
  };
  useEffect(() => {
    fetchChampionData();
  }, []);
  return (
    <div className="grid grid-cols-8 overflow-y-scroll overflow-x-hidden h-[26rem]">
      {renderPortraits()}
    </div>
  );
};
