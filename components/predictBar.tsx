interface PredictBarProps {
  predictValue: number;
}

export const PredictBar = ({ predictValue }: PredictBarProps) => {
  return (
    <div className="w-full h-16 relative">
      <div
        className="bg-blue-500 absolute top-0 left-0 h-full z-10"
        style={{ width: `${predictValue}%` }}
      ></div>
      <div
        className="absolute top-0 right-0 h-full bg-red-500 z-10"
        style={{ width: `${100 - predictValue}%` }}
      ></div>
      <div className="flex items-center justify-center z-30 h-full p-4">
        <p className="text-center z-30 bg-black px-2 font-bold">
          {predictValue}
        </p>
      </div>
    </div>
  );
};
