import { ChampionPick } from "./teamChampions";
import Image from "next/image";
import { TeamSide, PositionEnum } from "../pages/menu";

interface OwnProps {
  teamSide: TeamSide;
  handleOnClick: (side: TeamSide, pos: PositionEnum) => void;
}

type TeamPlayerProps = OwnProps & ChampionPick;

export const TeamPlayer = ({
  championName,
  championPosition,
  teamSide,
  handleOnClick,
}: TeamPlayerProps) => {
  const color = teamSide === "blue" ? "gtblue" : "gtred";
  const orientation =
    teamSide === "blue" ? "bg-graident-to-r" : "bg-gradient-to-l";
  if (!championName) {
    return (
      <div
        className={`w-full h-full ${orientation} from-${color} bg-opacity-25`}
        onClick={() => {
          handleOnClick(teamSide, championPosition);
        }}
      />
    );
  }
  return (
    <div className="relative" key={championName + championPosition}>
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
        <p>{championPosition}</p>
      </div>
    </div>
  );
};
