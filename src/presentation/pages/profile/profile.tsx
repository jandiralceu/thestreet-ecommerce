import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { routeAnimationProps } from "../../utils";

const ProfilePage = () => {
  return (
    <motion.div {...routeAnimationProps}>
      <Typography variant="h1">Profile</Typography>
      
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit
      rerum non iure ea blanditiis debitis iste molestias odit laudantium omnis
      veniam voluptatum adipisci quae explicabo aperiam, eius quam voluptate.
    </motion.div>
  );
};

export default ProfilePage;
