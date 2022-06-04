import "./App.css";
import { motion } from "framer-motion";
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from "@material-ui/icons";
import Spiderman from "./assets/spiderman.jpg";
import Item from "./components/Item";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(true);
  // For collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };
  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };
  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };
  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
      height: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
      height: "3rem",
    },
  };
  return (
    <div className="App">
      <motion.div
        data-open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines icons */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba(255,255,255,0.18)",
              transition: { delay: 0.2, duration: 0.4 },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profiles  */}
          <motion.div
            className="profile"
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba(255,255,255,0.18)",
              cursor: "pointer",
            }}
          >
            <img src={Spiderman} alt="Spiderman profile" />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* for Analytics */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                ANALYTICS
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Performance" />
            </div>
            {/* for Content */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                Content
              </motion.h3>
              <Item icon={<AttachMoneyRounded />} name="Sales" />
              <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />
              <Item icon={<AccountCircleRounded />} name="Customers" />
            </div>
            {/* for Customization */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                CUSTOMIZATION
              </motion.h3>
              <Item icon={<SettingsRemoteRounded />} name="Segments" />
              <Item icon={<ColorLensRounded />} name="Themes" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="body_container"></div>
    </div>
  );
}

export default App;
