import React, { useRef, useCallback } from "react";
import { styled } from "@mui/material/styles";
import HTMLFlipBook from "react-pageflip";
import { Container, Box } from "@mui/material";
import Image from "mui-image";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import Grid from "@mui/material/Grid";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Story() {
  const { bookId } = useParams();

  const book = useRef();

  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  const story = stories.find((story) => story.id === bookId);

  const Page = React.forwardRef((props, ref) => {
    return (
      <Box sx={{ border: "0.5px solid silver" }} ref={ref}>
        {props.children}
      </Box>
    );
  });

  const RenderCell = ({ data }) => {
    if (!data) return null;
    if (data.text) return <p>{data.text}</p>;
    if (data.image) return <Image src={data.image.url} alt={data.image.alt} />;
  };

  return (
    <div>
      <DrawerHeader></DrawerHeader>
      <Container>
        <Box
          sx={{
            backgroundImage: "url(/bookCoverMaterial.jpeg)",
            px: 4,
            py: 1,
          }}
        >
          <Box sx={{ boxShadow: 3 }} bgcolor="#ffffff">
            <HTMLFlipBook
              width={1000}
              height={1200}
              size="stretch"
              drawShadow
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1200}
              maxShadowOpacity={0.1}
              showCover={false}
              ref={book}
              onFlip={onFlip}
            >
              {story.pages.map((page, index) => (
                <Page key={index} number={index}>
                  <Grid
                    container
                    sx={{
                      minHeight: "32%",
                      maxHeight: "32%",
                      overflow: "hidden",
                    }}
                  >
                    <Grid xs={6} sx={{ p: 2, height: "100%" }}>
                      <RenderCell data={page.topLeft}></RenderCell>
                    </Grid>
                    <Grid xs={6} sx={{ p: 2, height: "100%" }}>
                      <RenderCell data={page.topRight}></RenderCell>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      minHeight: "32%",
                      maxHeight: "32%",
                      overflow: "hidden",
                    }}
                  >
                    <Grid xs={6} sx={{ p: 2, height: "100%" }}>
                      <RenderCell data={page.middleLeft}></RenderCell>
                    </Grid>
                    <Grid xs={6} sx={{ p: 2, height: "100%" }}>
                      <RenderCell data={page.middleRight}></RenderCell>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      minHeight: "32%",
                      maxHeight: "32%",
                      overflow: "hidden",
                    }}
                  >
                    <Grid xs={6} sx={{ p: 2, height: "100%" }}>
                      <RenderCell data={page.bottomLeft}></RenderCell>
                    </Grid>
                    <Grid xs={6} sx={{ p: 2, height: "100%" }}>
                      <RenderCell data={page.bottomRight}></RenderCell>
                    </Grid>
                  </Grid>
                </Page>
              ))}
            </HTMLFlipBook>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
