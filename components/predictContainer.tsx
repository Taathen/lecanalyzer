import { TeamPlayer } from "./teamPlayer";
import { useMemo, useState } from "react";
import { FetchPredictionResult } from "../api/api";
import { PredictBar } from "./predictBar";

export const PredictContainer = () => {
  const [predictionResult, setPredictionResult] = useState<number>(0);
  const makePrediction = async () => {
    /*
      In real application we should use the data that what were the picks for the team
      However, in this demo application, we are using the endpoint without data
      Because emulate the predicition result
    */
    const makePredictionResult = await FetchPredictionResult();
    setPredictionResult(makePredictionResult?.prediction ?? 0);
  };
  return (
    <div className="flex flex-col gap-y-4 pt-4">
      <div className="flex w-full items-center justify-center">
        <button
          onClick={() => makePrediction()}
          className="rounded bg-red-500 bg-gradient-to-r from-blue-500 px-4 py-2 text-white font-bold"
        >
          Predict
        </button>
      </div>
      <div className="w-full">
        <PredictBar predictValue={predictionResult} />
      </div>
    </div>
  );
};
