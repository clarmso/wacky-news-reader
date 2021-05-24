import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Link,
} from "@material-ui/core";
import { WackyState } from "./connect/reducer";
import { sections } from "./Page";
import { fetchArticles } from "./connect/actions";

const SetSection: React.FC = () => {
  const dispatch = useDispatch();
  const currentSection = useSelector((state: WackyState) => state.section);

  const [section, setSection] = useState(currentSection);
  const [openSelect, setOpenSelect] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newSection = event.target.value as string;
    setSection(newSection);
    dispatch(fetchArticles(newSection));
  };
  const handleSelectOpen = () => {
    setOpenSelect(true);
  };
  const handleSelectClose = () => {
    setOpenSelect(false);
  };

  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        <FormControl>
          <InputLabel>Section</InputLabel>
          <Select
            open={openSelect}
            onClose={handleSelectClose}
            onOpen={handleSelectOpen}
            value={section}
            onChange={handleSelectChange}
            data-cy="section-menu"
          >
            {Object.values(sections).map((section: string) => {
              return (
                <MenuItem
                  value={section}
                  key={`menu-item-${section}`}
                  data-cy={`menu-item-${section}`}
                >
                  {section}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SetSection;
