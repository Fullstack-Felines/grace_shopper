import { useContext } from "react";
import Kittens from "../components/Kittens";
import KittensContext from "../Context/KittensContext";

const useKittens = () => {
  const { kittens, setKittens } = useContext(KittensContext);
  const { availableKittens, setAvailableKittens } = useContext(KittensContext);
  const { unavailableKittens, setunavailableKittens } =
    useContext(KittensContext);

  return {
    kittens,
    setKittens,
    availableKittens,
    setAvailableKittens,
    unavailableKittens,
    setunavailableKittens,
  };
};

export default useKittens;
