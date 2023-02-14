import { TeamPlayer } from "./teamPlayer";
import { useMemo, useState } from "react";
import { TeamSide, PositionEnum } from "../pages/menu";
import { FetchPredictionResult } from "../api/api";
interface PredictContainerProps {}

export const PredictContainer = ({}: PredictContainerProps) => {
  const [predictionResult, setPredictionResult] = useState<any>();
  const makePrediction = async () => {
    const makePredictionResult = await FetchPredictionResult();
    setPredictionResult(makePredictionResult?.prediction);
  };
  return (
    <div className="flex flex-col">
      <button onClick={() => makePrediction()}>Predict</button>
      <div>{predictionResult}</div>
    </div>
  );
};
