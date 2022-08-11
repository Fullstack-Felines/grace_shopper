import { useContext } from "react";
import KittensContext from "../Context/KittensContext";

const useKittens = () => {
  const { kittens, setKittens } = useContext(KittensContext);

  return { kittens, setKittens };
};

export default useKittens;
