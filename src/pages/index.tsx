import { useState } from "react";
import { copyOutline } from "ionicons/icons";
import copy from "copy-to-clipboard";

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

  const copyToClipboard = () => {
    copy(password);
  };
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <button className="p-2 border-black rounded-xl border" onClick={generate}>
        Click to generate
      </button>
      {isGenerated && (
        <div className="flex items-center gap-2">
          <p>{password}</p>
          <button onClick={copyToClipboard}>
            {/* <IonIcon icon={copyOutline} /> */}
          </button>
        </div>
      )}
    </div>
  );
}
