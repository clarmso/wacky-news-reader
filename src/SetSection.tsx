import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Select,
  FormControl,
  FormLabel,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WackyState } from "./connect/reducer";
import { sections } from "./Page";
import { fetchArticles } from "./connect/actions";

const useStyles = makeStyles({
  menuItem: {
    textTransform: "capitalize",
  },
});

const SetSection: React.FC = () => {
  const currentSection = useSelector((state: WackyState) => state.section);

  const [section, setSection] = useState(currentSection);
  const [openSelect, setOpenSelect] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const classes = useStyles();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newSection = event.target.value as string;
    setSection(newSection);
    history.push(`/${newSection}`);
    dispatch(fetchArticles(newSection));
  };
  const handleSelectOpen = () => {
    setOpenSelect(true);
  };
  const handleSelectClose = () => {
    setOpenSelect(false);
  };

  return (
    <Grid item xs>
      <FormControl>
        <FormLabel component="legend">Section</FormLabel>
        <Select
          open={openSelect}
          onClose={handleSelectClose}
          onOpen={handleSelectOpen}
          value={section}
          onChange={handleSelectChange}
          className={classes.menuItem}
          data-cy="section-menu"
        >
          {Object.values(sections).map((section: string) => {
            return (
              <MenuItem
                value={section}
                key={`menu-item-${section}`}
                data-cy={`menu-item-${section}`}
                className={classes.menuItem}
              >
                {section}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SetSection;
