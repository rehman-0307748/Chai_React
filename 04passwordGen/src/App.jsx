import { useState, useCallback, useEffect, useRef } from "react"; // ✅ Added useCallback
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [chracterAllowed, setCharacterAllowed] = useState(false);
  // const [symbolAllowed, setSymbolAllowed] = useState(true);
  const maximumLength = 20;
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (chracterAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    for (let i = 0; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
      console.log(randomIndex, str.charAt(randomIndex));
    }
    setPassword(pass);
  }, [length, numberAllowed, chracterAllowed]);

  const passRef = useRef(null);

  const copyClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, maximumLength); // For mobile devices
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            ref={passRef}
            placeholder="Password"
            readOnly
            // ref={passwordRef}
          />
          <button
            onClick={copyClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={8}
            value={length}
            className="cursor-pointer"
            max={maximumLength}
            onChange={(e) => setLength(e.target.value)}
          />

          <label>Length: {length}</label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={chracterAllowed}
              id="chracterAllowed"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="chracterAllowed">Special Chracters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
