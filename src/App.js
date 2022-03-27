import { useEffect, useState } from "react";
import fruits4 from "./Assets/fruits4.png";
import fruits8 from "./Assets/fruits8.png";
import "./App.css";
import { data } from "./Data/StarterData";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import UserCard from "./Components/UserCard";

function App() {
  const [allEngineers, setAllEngineers] = useState(data);
  const [formInput, setFormInput] = useState({
    handle: "",
    timeZone: "",
    favCity: "",
    favColor: "#EF5E5E",
    favTheme: "",
    favLang: "",
    favSnack: "",
    favMusic: "",
    imgSrc: "",
  });
  const [radioButton, setRadioButton] = useState(formInput.imgSrc);

  const getWeatherApi = async (engineers) => {
    await engineers.map(async (engineer) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${engineer.favCity}&appid=ebc50f00da2a268f8884c37b8094c292`;
      const response = await fetch(url);
      const responseJson = await response.json();
      engineer.weather = responseJson.weather[0].description;
    });
  };
  console.log("allEngineers", allEngineers);

  //I am wondering if there's a way to not make the api call for the entire list every time?
  useEffect(() => {
    getWeatherApi(allEngineers);
  }, [allEngineers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    allEngineers.push(formInput);
    setAllEngineers(allEngineers);
    getWeatherApi(allEngineers);
    setFormInput({
      handle: "",
      timeZone: "",
      favCity: "",
      favColor: "#EF5E5E",
      favTheme: "",
      favLang: "",
      favSnack: "",
      favMusic: "",
      imgSrc: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormInput({ ...formInput, [e.target.name]: value });
    setRadioButton({ ...formInput, [e.target.value]: value });
    setRadioButton(e.target.value);
  };

  return (
    <div className="main-wrapper">
      <UserCard data={data} />
      <Box sx={{ minWidth: 120 }} id="form">
        <FormControl margin="normal">
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="handle"
            value={formInput.handle}
            onChange={(e) => handleChange(e)}
            placeholder="Your Name"
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="time-zone-select-label">Time Zone</InputLabel>
          <Select
            labelId="time-zone-label"
            id="time-zone-select"
            value={formInput.timeZone}
            name="timeZone"
            label="Time Zone"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Hawaiian-Aleutian Time"}>
              Hawaii Aleutian Time Zone (HDT/HST/HT)
            </MenuItem>
            <MenuItem value={"Alaskan-Yukon Time"}>
              Alaskan-Yukon Time Zone (AKDT/AKST, YDT/YST)
            </MenuItem>
            <MenuItem value={"Pacific Time"}>Pacific Time Zone</MenuItem>
            <MenuItem value={"Central Time"}>Central Time Zone</MenuItem>
            <MenuItem value={"Mountain Time"}>
              Mountain Time Zone (MDT/MST/MT)
            </MenuItem>
            <MenuItem value={"Eastern Time Zone"}>
              Eastern Time Zone (EDT/EST/ET)
            </MenuItem>
          </Select>
        </FormControl>
        <input
          className="color-bar"
          type="color"
          name="favColor"
          value={formInput.favColor}
          onChange={(e) => handleChange(e)}
        ></input>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="fave-language">Programming Language</InputLabel>
          <Select
            labelId="fave-language-label"
            id="fave-language-select"
            value={formInput.favLang}
            name="favLang"
            label="Favorite Language"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"HTML"}>HTML</MenuItem>
            <MenuItem value={"CSS"}>CSS</MenuItem>
            <MenuItem value={"JQuery"}>JQuery</MenuItem>
            <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
            <MenuItem value={"React"}>React</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="fave-theme">Coding Theme</InputLabel>
          <Select
            labelId="fave-theme-label"
            id="fave-theme-select"
            value={formInput.favTheme}
            name="favTheme"
            label="Coding Theme"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Light"}>Light</MenuItem>
            <MenuItem value={"Dark"}>Dark</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="fave-theme">Coding Snack</InputLabel>
          <Select
            labelId="fave-snack-label"
            id="fave-snack-select"
            value={formInput.favSnack}
            name="favSnack"
            label="Coding Snack"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Bitter"}>Something Bitter</MenuItem>
            <MenuItem value={"Salty"}>Something Salty</MenuItem>
            <MenuItem value={"Sour"}>Something Sour</MenuItem>
            <MenuItem value={"Sweet"}>Something Sweet</MenuItem>
            <MenuItem value={"Umami"}>Something Umami</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="fave-theme">Coding Music</InputLabel>
          <Select
            labelId="fave-music-label"
            id="fave-music-select"
            value={formInput.favMusic}
            name="favMusic"
            label="Coding Music"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Instrumental Only"}>Instrumental Only</MenuItem>
            <MenuItem value={"Vocals + Instrumental"}>
              Vocals + Instrumental
            </MenuItem>
            <MenuItem value={"No Music"}>No Music</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="fave-theme">Favorite City</InputLabel>
          <Select
            labelId="fave-city-label"
            id="fave-city-select"
            value={formInput.favCity}
            name="favCity"
            label="Favorite City"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"San Francisco, California"}>
              San Francisco, California
            </MenuItem>
            <MenuItem value={"Portland, Oregon"}>Portland, Oregon</MenuItem>
            <MenuItem value={"Seattle, Washington"}>
              Seattle, Washington
            </MenuItem>
            <MenuItem value={"Denver, Colorado"}>Denver, Colorado</MenuItem>
            <MenuItem value={"Tucson, Arizona"}>Tucson, Arizona</MenuItem>
            <MenuItem value={"Austin, Texas"}>Austin, Texas</MenuItem>
            <MenuItem value={"Chicago, Illinois"}>Chicago, Illinois</MenuItem>
            <MenuItem value={"Nashville, Tennessee"}>
              Nashville, Tennessee
            </MenuItem>
            <MenuItem value={"New Orleans, Louisiana"}>
              New Orleans, Louisiana
            </MenuItem>
            <MenuItem value={"Orlando, Florida"}>Orlando, Florida</MenuItem>
            <MenuItem value={"Atlanta, Georgia"}>Atlanta, Georgia</MenuItem>
            <MenuItem value={"New York, New York"}>New York, New York</MenuItem>
            <MenuItem value={"Honolulu, Hawaii"}>Honolulu, Hawaii</MenuItem>
            <MenuItem value={"Anchorage, Alaska"}>Anchorage, Alaska</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal">
          <RadioGroup
            row
            class="radio-group"
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={radioButton}
            onChange={handleChange}
          >
            <FormControlLabel
              value={fruits4}
              control={<Radio />}
              label={
                <>
                  <img src={fruits4} className="profile-img" />
                </>
              }
              name="imgSrc"
              onChange={handleChange}
              style={{
                display: "flex",
                flexDirection: "column-reverse",
              }}
            />
            <FormControlLabel
              value={fruits8}
              control={<Radio />}
              label={
                <>
                  <img src={fruits8} className="profile-img" />
                </>
              }
              name="imgSrc"
              onChange={handleChange}
              style={{
                display: "flex",
                flexDirection: "column-reverse",
              }}
            />
          </RadioGroup>
        </FormControl>
        <Button
          onClick={handleSubmit}
          variant="contained"
          class="add-engineer-button"
        >
          Add Engineer
        </Button>
      </Box>
    </div>
  );
}

export default App;
