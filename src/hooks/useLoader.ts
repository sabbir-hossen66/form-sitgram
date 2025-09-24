import { useState, CSSProperties } from "react";

export function useLoader(initialColor: string = "#ffffff", initialLoading: boolean = true) {
  const [loading, setLoading] = useState(initialLoading);
  const [color, setColor] = useState(initialColor);
  const toggle = () => setLoading((prev) => !prev);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

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
