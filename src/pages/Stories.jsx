import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const itemData = [
  {
    id: "vincent-and-the-sea-dragon",
    img: "https://images.unsplash.com/photo-1577493340887-b7bfff550145",
    title: "Vincent and the Sea Dragon",
  },
];

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
        <Typography variant="h5" className="py-8">
          Books
        </Typography>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0 }}
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          <ImageList sx={{ width: "100%" }} cols={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Card
                  className="m-2 cursor-pointer"
                  onClick={() => navToBook(item.id)}
                >
                  <CardContent>
                    <img
                      src={`${item.img}?w=400&h=600&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=400&h=600&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <Typography variant="subtitle2" className="pt-4">
                      Vincent and the Sea Dragons
                    </Typography>
                    <Typography variant="body2" className="pt-2">
                      Matt Martin
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
