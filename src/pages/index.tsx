import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const generate = () => {
    const length = 14;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891234567890-=[];',./?!@#$%^&*()_+{}|:<>?";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    if (!retVal) {
      setPassword("");
      setIsGenerated(false);
    } else {
      setPassword(retVal);
      setIsGenerated(true);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-rows-1 border-2">
        <button
          className="p-2 border-black rounded-xl border"
          onClick={generate}
        >
          Click to generate
        </button>
        {isGenerated && (
          <div className="flex items-center">
            <p>{password}</p>
            <button></button>
          </div>
        )}
      </div>
    </div>
  );
}
