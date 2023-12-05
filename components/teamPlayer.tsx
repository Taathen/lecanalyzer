import { ChampionPick } from "./teamChampions";
import Image from "next/image";
import { PositionEnum } from "../types/positionEnum";
import { TeamSide } from "../types/teamSide";

interface OwnProps {
  teamSide: TeamSide;
  handleOnClick: (side: TeamSide, pos: PositionEnum) => void;
  isChosen: boolean;
}

type TeamPlayerProps = OwnProps & ChampionPick;

export const TeamPlayer = ({
  championName,
  championPosition,
  teamSide,
  handleOnClick,
  isChosen,
}: TeamPlayerProps) => {
  const chosen = isChosen ? "border-white" : "border-black";
  const color = teamSide === "blue" ? "from-gtblue" : "from-gtred";
  const orientation =
    teamSide === "blue" ? "bg-gradient-to-r" : "bg-gradient-to-l";
  if (!championName) {
    return (
      <div
        className={`w-full h-full ${orientation} ${color} bg-opacity-25 border-2 ${chosen}`}
        onClick={() => {
          handleOnClick(teamSide, championPosition);
        }}
      />
    );
  }
  return (
    <div
      className={`relative border-y-2 ${chosen}`}
      key={championName + championPosition}
    >
      <div
        className="h-40 w-full transform -scale-x-100"
        onClick={() => handleOnClick(teamSide, championPosition)}
      >
        <Image
          src={
            "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
            championName +
            "_0" +
            ".jpg"
          }
          alt={"Champion image for " + championName}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "right top",
            transform: "scaleX(-1)",
          }}
        />
      </div>
      <div className="absolute bottom-0">
        <p>{championName}</p>
        <p>
          {PositionEnum[championPosition].charAt(0).toUpperCase().slice(0, 1) +
            PositionEnum[championPosition].slice(
              1,
              PositionEnum[championPosition].length
            )}
        </p>
      </div>
    </div>
  );
};
