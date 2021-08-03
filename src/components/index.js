import React, { useState } from "react";
import Button from "../components/Button";
import Screen from "./Input";
import * as math from "mathjs";

export default function Index() {
  const [prev, setPrev] = useState("");
  const [curr, setCurr] = useState("");

  const handle = (val) => {
    setPrev((prev) => [...prev, val + ""]);
  };

  const clear = () => {
    setPrev("");
    setCurr("");
  };

  const result = () => {
    const input = prev.join("");
    console.log(input);

    setCurr(math.evaluate(input));
  };

  return (
    <div>
      <Screen prev={prev} curr={curr} />
      <div className="flex">
        <Button handelclick={clear} value="ac" width={80} />
        <Button handelclick={handle} value="%" width={40} />
        <Button handelclick={handle} value="/" width={40} />
      </div>
      <div className="flex">
        <Button handelclick={handle} value="1" width={40} />
        <Button handelclick={handle} value="2" width={40} />
        <Button handelclick={handle} value="3" width={40} />
        <Button handelclick={handle} value="*" width={40} />
      </div>
      <div className="flex">
        <Button handelclick={handle} value="4" width={40} />
        <Button handelclick={handle} value="5" width={40} />
        <Button handelclick={handle} value="6" width={40} />
        <Button handelclick={handle} value="-" width={40} />
      </div>
      <div className="flex">
        <Button handelclick={handle} value="7" width={40} />
        <Button handelclick={handle} value="8" width={40} />
        <Button handelclick={handle} value="9" width={40} />
        <Button handelclick={handle} value="+" width={40} />
      </div>
      <div className="flex">
        <Button handelclick={handle} value="0" width={80} />
        <Button handelclick={handle} value="." width={40} />
        <Button handelclick={result} value="=" width={40} />
      </div>
    </div>
  );
}
