import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChampionGrid } from "../components/championGrid";
import { PredictContainer } from "../components/predictContainer";
import { PositionEnum } from "../types/positionEnum";
import { TeamChampions, ChampionPick } from "../components/teamChampions";
import { TeamSide } from "../types/teamSide";

export default function Home() {
  const [redChampionPicks, redSetChampionPicks] = useState<Array<ChampionPick>>(
    [...Array(5)].map((index) => {
      return {
        championName: "",
        championPosition: index,
      };
    })
  );
  const [blueChampionPicks, blueSetChampionPicks] = useState<
    Array<ChampionPick>
  >(
    [...Array(5)].map((index) => {
      return {
        championName: "",
        championPosition: index,
      };
    })
  );
  const [currentChosenPosition, setCurrentlyChosenPosition] = useState<
    number | undefined
  >(undefined);

  const [currentSide, setCurrentSide] = useState<TeamSide>("blue");

  const makeChampionSelect = (championName: string) => {
    const championPicks =
      currentSide === "blue" ? blueChampionPicks : redChampionPicks;
    const updatedChampionPicks = Array.from(championPicks);
    const position = getNextPositionIndex(championPicks);
    const positionString = PositionEnum[position];
    updatedChampionPicks[position] = {
      championName: championName,
      championPosition: position,
    };
    currentSide === "blue"
      ? blueSetChampionPicks(updatedChampionPicks)
      : redSetChampionPicks(updatedChampionPicks);
  };

  const getNextPositionIndex = (championPicks: Array<ChampionPick>) => {
    if (currentChosenPosition !== undefined) return currentChosenPosition;
    for (let i = 0; i < championPicks.length; i++) {
      if (championPicks.at(i)?.championName === "") {
        return i;
      }
    }
    return 0;
  };
  const getChosenSlot = (side: TeamSide) => {
    const championPicks =
      side === "blue" ? blueChampionPicks : redChampionPicks;
    return side === currentSide
      ? getNextPositionIndex(championPicks)
      : undefined;
  };

  const choosePosAndSide = (side: TeamSide, position: PositionEnum) => {
    setCurrentlyChosenPosition(position);
    setCurrentSide(side);
  };

  return (
    <>
      <Head>
        <title>League of legends foreteller </title>
        <meta name="description" content="League of legends foreteller" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-cols-3 w-full h-screen">
          <div className="flex flex-col">
            <TeamChampions
              choosePosAndSide={choosePosAndSide}
              teamSide="blue"
              teamPicks={blueChampionPicks}
              chosenIndex={getChosenSlot("blue")}
            />
          </div>
          <div className="flex flex-col">
            <ChampionGrid selectChampion={makeChampionSelect}></ChampionGrid>
            <PredictContainer />
          </div>
          <div className="flex flex-col">
            <TeamChampions
              choosePosAndSide={choosePosAndSide}
              teamSide="red"
              teamPicks={redChampionPicks}
              chosenIndex={getChosenSlot("red")}
            />
          </div>
        </div>
      </main>
    </>
  );
}
