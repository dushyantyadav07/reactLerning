import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setpassword] = useState("");
  const [copy, setcopy] = useState("Copy");

  // for text copy
  const copyToClipboard = () => {
    const passwordInput = document.getElementById("passwordInput");
    passwordInput.select();
    document.execCommand("copy");
    passwordInput.setSelectionRange(0, 999);
    setcopy("Copied");
  };

  const passwordGanrtor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!~@#$%^&*()?><+_-{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setcopy("Copy");
    setpassword(pass);
  }, [numberAllow, charAllow, length, copy]);

  useEffect(() => {
    passwordGanrtor();
  }, [numberAllow, charAllow, length]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600 justify-center">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            id="passwordInput"
            className="outline-none w-full py-2 px-3' text-neutral-900"
            value={password}
            type="text"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-red-700 px-4 py-0.5 shrink-0 text-white"
            onClick={copyToClipboard}
          >
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              className="cursor-pointer"
              id="charInput"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
