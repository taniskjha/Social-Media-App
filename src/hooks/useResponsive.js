import { useMediaQuery } from "react-responsive";
import { MOBILE_MAX_WIDTH } from "../utils/constant";

const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });

  return {
    isMobile,
  };
};

export default useResponsive;
