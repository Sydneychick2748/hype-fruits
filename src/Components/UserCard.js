import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function UserCard(props) {
  console.log("props", props);
  const [handleUser, setHandleUser] = useState("");
  const [faveColorUser, setfaveColorUser] = useState("");
  const [timeZoneUser, setTimeZoneUser] = useState("");
  const [faveLangUser, setFaveLangUser] = useState("");
  const [faveSnackUser, setFaveSnackUser] = useState("");
  const [faveMusicUser, setFaveMusicUser] = useState("");
  const [faveThemeUser, setFaveThemeUser] = useState("");
  const [weatherToday, setWeatherToday] = useState("");
  const [userDisplay, setUserDisplay] = useState(false);
  //I feel like there has to be a cleaner way to do the lines of code both above and below this comment. Would I use obj deconstruction?
  const handleClick = (key) => {
    setHandleUser(props.data[key].handle);
    setTimeZoneUser(props.data[key].timeZone);
    setFaveLangUser(props.data[key].favLang);
    setFaveSnackUser(props.data[key].favSnack);
    setFaveMusicUser(props.data[key].favMusic);
    setFaveThemeUser(props.data[key].favTheme);
    setWeatherToday(props.data[key].weather);
    setfaveColorUser(props.data[key].favColor);
    setUserDisplay(true);
  };
  return (
    <div className="cards-parent">
      {props.data.map((item, key) => (
        <Button onClick={() => handleClick(key)} key={key} id="#button">
          <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia
              component="img"
              height="140"
              image={item.imgSrc}
              alt="Fruit image"
            />
            <CardContent style={{ backgroundColor: `${item.favColor}` }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.handle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.timeZone}
              </Typography>
            </CardContent>
          </Card>
        </Button>
      ))}
      <div>
        {userDisplay ? (
          <Box sx={{ width: "100%" }} className="table-wrapper">
            <h1>{handleUser}</h1>
            <Stack direction="row" className="table-parent">
              <Item className="table-lable">Time Zone:</Item>
              <Item className="table-data">{timeZoneUser}</Item>
            </Stack>
            <Stack direction="row" className="table-parent color-parent">
              <Item className="table-lable color-lable">Favorite Color:</Item>
              <Item
                className="table-data fave-color"
                style={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "90%",
                  backgroundColor: `${faveColorUser}`,
                  marginLeft: ".5em",
                  alignItems: "center",
                }}
              ></Item>
            </Stack>
            <Stack direction="row" className="table-parent">
              <Item className="table-lable">Fave Programming Lang:</Item>
              <Item className="table-data">{faveLangUser}</Item>
            </Stack>
            <Stack direction="row" className="table-parent">
              <Item className="table-lable">Favorite Coding Theme:</Item>
              <Item className="table-data">{faveThemeUser}</Item>
            </Stack>
            <Stack direction="row" className="table-parent">
              <Item className="table-lable">Favorite Coding Snack:</Item>
              <Item className="table-data">{faveSnackUser}</Item>
            </Stack>
            <Stack direction="row" className="table-parent">
              <Item className="table-lable">Favorite Coding Music:</Item>
              <Item className="table-data">{faveMusicUser}</Item>
            </Stack>
            <Stack direction="row" className="table-parent">
              <Item className="table-lable">
                Favorite City's Weather Today:
              </Item>
              <Item className="table-data">{weatherToday}</Item>
            </Stack>
          </Box>
        ) : null}
      </div>
    </div>
  );
}

export default UserCard;
