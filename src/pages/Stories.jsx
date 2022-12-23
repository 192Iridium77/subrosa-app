import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import stories from "../data/stories";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Stories() {
  const navigate = useNavigate();
  const navToBook = (bookId) => {
    navigate(`/book/${bookId}`);
  };
  return (
    <div className="flex flex-col w-full">
      <DrawerHeader />
      <div className="container">
        <Typography
          variant="h5"
          sx={{ p: 1 }}
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          Stories
        </Typography>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0 }}
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          <ImageList sx={{ width: "100%" }} cols={3}>
            {stories.map((story) => (
              <ImageListItem key={story.img}>
                <Card
                  className="m-2 cursor-pointer"
                  onClick={() => navToBook(story.id)}
                  sx={{ boxShadow: 3, m: 1, cursor: "pointer" }}
                >
                  <CardMedia
                    component="img"
                    image={story.img}
                    alt={story.alt}
                  />
                  <CardContent>
                    <Typography variant="body2" className="pt-2">
                      {story.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
