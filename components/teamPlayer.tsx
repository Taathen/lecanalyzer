import { ChampionPick } from "./teamChampions";
import Image from "next/image";

export const TeamPlayer = ({
  championName,
  championPosition,
}: ChampionPick) => {
  if (!championName) {
    return (
      <div className="w-full h-full bg-gradient-to-r from-[#7f1d1d80] bg-opacity-25"></div>
    );
  }
  return (
    <div className="relative" key={championName + championPosition}>
      <div className="h-40 w-full">
        <Image
          src={
            "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
            championName +
            "_0" +
            ".jpg"
          }
          alt={"Champion image for " + championName}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "right top" }}
        />
      </div>
      <div className="absolute bottom-0">
        <p>{championName}</p>
        <p>{championPosition}</p>
      </div>
    </div>
  );
};
