import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, setBodyPart, bodyPart }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderList = () => {
    return data.map((item) => (
      <Tab
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        label={
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        }
        sx={{
          color: "#ff2625",
        }}
      />
    ));
  };

  return (
    <Box
      sx={{
        m: "0 3rem",
        flexGrow: 1,
        maxWidth: { md: "100%" },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          width: {
            md: "75%",
          },
          mx: "auto",
        }}
      >
        {renderList()}
      </Tabs>
    </Box>
  );
};

export default HorizontalScrollBar;
