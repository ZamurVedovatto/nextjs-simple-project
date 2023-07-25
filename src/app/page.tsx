"use client";

import { Event, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (e: Event) => {
    console.log(inputVal);
    e.preventDefault();
    push(`/profile/${inputVal}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type the Github user here..."
          value={inputVal}
          onChange={(event) => setInputVal(event.target.value)}
          className="text-black"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
