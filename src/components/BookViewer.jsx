import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import HTMLFlipBook from "react-pageflip";

const seaDragonStory = {
  pages: [
    {
      text: `Vincent walks on the beach
        His feet are wet from the sand
        Mum and Dad lift him up over the waves
        “Any higher and you will launch out of orbit” says Dad
        “Maybe Vincent could feed hungry aliens in space” says Mum
        Vincent wants to be a chef just like Grandpa.`,
    },
    {
      text: `Today Vincent has met a new friend called Edward
        Edward promised to help Vincent find fish for his soup.
        They climb up the stairs
        They hop across the rocks
        They splash in pools`,
    },
    {
      text: `Vincent sees so many colourful fish
        He dips his hand into the water
        The fish scuttle away
        “We will never catch one”, Vincent says sadly.
        He throws his bucket away
        “That was my bucket!” says Edward Angrily.
        “I’m sorry, I didn’t mean to…”`,
    },
    {
      text: `“I want my bucket, go and get it back!”
        The bucket lands on the water
        Vincent looks back up at the bucket
        it bobs up and down on the water.`,
    },
    {
      text: `He has an idea
        He climbs into the bucket
        Edward pushes the bucket further out into the water
        “Ed, what are you doing?” Vincent asks
        “You will be okay, trust me”
        Vincent looks worried.
        using his spade as a paddle
        He puts up his towel as a sail
        and sails across the water.`,
    },
    {
      text: `The water is deep and wild, it tosses and turns the wrong way around.
        “Oh no, the bucket!” cries Vincent
        The fish that got away, now watch him sink down into the cold water.
        Vincent wishes he was safe with Mum and Dad again`,
    },
    {
      text: `Out of the deep, a shadow lurked
        It swirled up around the boy, who had all but given up
        A strange blue creature pulled him down to the bottom of the sea…`,
    },
    {
      text: `Vincent wakes up in a mysterious garden
        He sees flowers of colours never seen before
        Dragonflies zoom around, chasing butterflies`,
    },
    {
      text: `A blue creature peers at him from behind the flowers
        It looks scared of the boy
        “Don’t worry, I wont hurt you”
        Vincent reaches out his hand too quickly
        The small creature runs away and hides`,
    },
    {
      text: `Vincent sadly turns away
        “Where on Earth am I?”
        Vincent’s tummy rumbles
        He is so hungry he would even eat almonds!`,
    },
    {
      text: `Vincent begins collecting plants and bugs
        He starts a small fire like his grandpa taught him
        And using a tin of tuna he brought with him, he starts to cook
        “These strange flowers make the stew too sweet”
        Vincent puts in a handful of Bugs
        “These bugs make the stew too slimy”
        He grinds up some seeds and tips them into the tin
        “There!”`,
    },
    {
      text: `The strange creature, who could smell the stew, came out from its hiding place
        “Oh, are you hungry?” Vincent asks
        He offers the stew, served from his spade
        “Are you a dragon?”
        The creature tastes the stew and purrs
        “Haha, you seem to like it”
        The two sat and ate all of the delicious stew together.`,
    },
  ],
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MyBook(props) {
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="p-4 bg-gray-100" ref={ref}>
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });
  return (
    <div className="w-full mt-12">
      <DrawerHeader></DrawerHeader>
      <div className="container">
        <HTMLFlipBook
          width={1000}
          height={1200}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="demo-book"
        >
          <Page number="1">Page text</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

// export default function BookViewer() {
//   const [page, setPage] = useState(0);

//   return (
//     <div className="py-20 bg-gray-200 h-full">
//       <div className="flex h-full bg-white justify-between items-center divide-x-4 divide-gray-200 container">
//         <div
//           className="flex justify-center h-full whitespace-pre-line p-8"
//           style={{ width: "50%" }}
//         >
//           <div>{seaDragonStory.pages[page * 2].text}</div>
//           {(page + 1) * 2 > 2 && (
//             <button
//               className="bg-blue-400 px-4 py-2 absolute"
//               style={{
//                 left: "40px",
//                 top: "48%",
//               }}
//               onClick={() => setPage(page - 1)}
//             >
//               Back
//             </button>
//           )}
//         </div>
//         <div
//           className="flex justify-center h-full whitespace-pre-line p-8"
//           style={{ width: "50%" }}
//         >
//           <div>{seaDragonStory.pages[page * 2 + 1].text}</div>
//           {(page + 1) * 2 < seaDragonStory.pages.length && (
//             <button
//               className="bg-blue-400 px-4 py-2 absolute"
//               style={{
//                 right: "40px",
//                 top: "48%",
//               }}
//               onClick={() => setPage(page + 1)}
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
