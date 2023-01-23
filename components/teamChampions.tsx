import { TeamPlayer } from "./teamPlayer";
import { useMemo } from "react";

interface TeamChampionsProps {
  teamSide: "red" | "blue";
  teamPicks: Array<ChampionPick>;
}

export interface ChampionPick {
  championName: string;
  championPosition: string;
}
export const TeamChampions = ({ teamPicks, teamSide }: TeamChampionsProps) => {
  const picks = useMemo(() => teamPicks, [teamPicks]);
  const renderChhampionSlots = () => {
    return picks.map((element, index) => {
      return (
        <div className="w-full h-40" key={index + element.championName}>
          <TeamPlayer
            championName={element.championName}
            championPosition={element.championPosition}
          />
        </div>
      );
    });
  };

  return <div className="flex flex-col">{renderChhampionSlots()}</div>;
};