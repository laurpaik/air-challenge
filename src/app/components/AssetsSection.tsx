"use client";
import Image from "next/image";
import { Clip } from "../api/clips";
import { Box, Card, CardMedia, Container } from "@mui/material";
import styles from "./AssetsSection.module.css";

interface AssetSectionProps {
  clips: Clip[];
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: "center",
//   color: (theme.vars || theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

export default function AssetSection({ clips }: AssetSectionProps) {
  return (
    // <Box sx={{ width: "100%", minHeight: 393 }}>
    //   <Masonry
    //     columns={4}
    //     spacing={2}
    //     defaultHeight={300}
    //     defaultColumns={4}
    //     defaultSpacing={1}
    //   >
    //     {clips.map((clip) => (
    //       // <Item key={clip.id} sx={{ height: 300 }}>
    //       <Image
    //         key={clip.id}
    //         alt=""
    //         src={clip.assets.image}
    //         height={300}
    //         width={300}
    //       />
    //       // </Item>
    //     ))}
    //   </Masonry>
    // </Box>

    <Box
      className={styles.galleryContainer}
      sx={{ width: "100%", mx: "auto", p: 2 }}
    >
      {/* <Container > */}
      {/* <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} defaultHeight={300}> */}
      {clips.map((clip) => (
        <Card key={clip.id} sx={{ mb: 2 }}>
          <CardMedia
            component={"img"}
            src={clip.assets.image}
            image={clip.assets.image}
            alt={clip.title ?? ""}
            sx={{
              width: "100%",
              height: "auto", // Maintains natural proportions
              objectFit: "contain", // Prevents image distortion
            }}
          />
          {/* <CardContent>
            <Typography variant="body2" color="text.secondary">
            Posted by {clip.user}
            </Typography>
            </CardContent> */}
        </Card>
      ))}
      {/* </Container> */}
      {/* </Masonry> */}
    </Box>
  );
}
