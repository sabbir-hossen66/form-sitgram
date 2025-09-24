import { useState, CSSProperties } from "react";

export function useLoader(initialColor: string = "#ffffff", initialLoading: boolean = true) {
  const [loading, setLoading] = useState(initialLoading);
  const [color, setColor] = useState(initialColor);

  // toggle function
  const toggle = () => setLoading((prev) => !prev);

  // input handler
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  // style override (আপনি চাইলে props থেকে নিতেও পারেন)
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return {
    loading,
    color,
    setColor,
    toggle,
    handleColorChange,
    override,
  };
}
