import axios from "axios";

export const FetchPredictionResult = async () => {
  const request = await axios.get("/api/predict");
  return request.data;
};
