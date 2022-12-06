import { motion } from "framer-motion";
import { routeAnimationProps } from "../../utils";

const PageNotFound = () => {
  return (
    <motion.div {...routeAnimationProps}>
      <h1>Page not found</h1>
    </motion.div>
  );
};

export default PageNotFound;
