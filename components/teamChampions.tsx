import { TeamPlayer } from "./teamPlayer";
import { useMemo } from "react";
import { TeamSide, PositionEnum } from "../pages/menu";
interface TeamChampionsProps {
  teamSide: TeamSide;
  teamPicks: Array<ChampionPick>;
  choosePosAndSide: (side: TeamSide, pos: PositionEnum) => void;
  chosenIndex?: number;
}

export interface ChampionPick {
  championName: string;
  championPosition: number;
}
export const TeamChampions = ({
  teamPicks,
  teamSide,
  choosePosAndSide,
  chosenIndex,
}: TeamChampionsProps) => {
  const picks = useMemo(() => teamPicks, [teamPicks]);
  const renderChhampionSlots = () => {
    return picks.map((element, index) => {
      return (
        <div className="w-full h-40" key={index + element.championName}>
          <TeamPlayer
            handleOnClick={choosePosAndSide}
            teamSide={teamSide}
            championName={element.championName}
            championPosition={index}
            isChosen={chosenIndex === index}
          />
        </div>
      );
    });
  };

  return <div className="flex flex-col">{renderChhampionSlots()}</div>;
};
