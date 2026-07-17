"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Clip, fetchAssets } from "../api/clips";
import styles from "./AssetsSection.module.css";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface AssetSectionProps {
  clips: Clip[];
  total: number;
  // cursor?: string | null;
  // hasMore: boolean;
}

export default function AssetSection({ clips, total }: AssetSectionProps) {
  const [assetClips, setAssetClips] = useState<Clip[]>(clips);

  const [selectedAsset, setSelectedAsset] = useState<any>();
  const [hoveredAsset, setHoveredAsset] = useState<any>();

  const dragItemIdx = useRef<number | undefined | null>(null);
  const dragOverItemIdx = useRef<number | undefined | null>(null);

  const handleDragStart = (idx: any) => {
    console.log("drag start", idx);
    dragItemIdx.current = idx;
    setSelectedAsset(idx);
  };

  const handleDragEnter = (idx: any) => {
    console.log("drag enter", idx);
    dragOverItemIdx.current = idx;
    setHoveredAsset(idx);
    // TODO: left/right math so we can have an indicator on before or after
  };

  const handleDrop = () => {
    const listCopy = [...assetClips];
    // @ts-ignore
    const targetItem = listCopy.splice(dragItemIdx.current, 1)[0];
    // @ts-ignore
    listCopy.splice(dragOverItemIdx.current, 0, targetItem);

    dragItemIdx.current = null;
    dragOverItemIdx.current = null;
    setSelectedAsset(null);
    setAssetClips(listCopy);
  };
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`assets-content`}
        id={`assets-header`}
      >
        Assets ({total})
      </AccordionSummary>
      <AccordionDetails>
        <Box
          className={styles.galleryContainer}
          sx={{ width: "100%", mx: "auto", p: 2 }}
        >
          {assetClips.map((clip, index) => (
            <div key={`${clip.id}-${index}`}>
              <div
                key={clip.id}
                className={clsx(
                  styles.asset,
                  selectedAsset === index ? styles.dragging : "",
                  hoveredAsset === index ? styles.dragOver : ""
                )}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <Card sx={{ mb: 2 }}>
                  <CardMedia
                    component={"img"}
                    src={clip.assets.image}
                    image={clip.assets.image}
                    loading="lazy"
                    alt={clip.title || ""}
                    sx={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Card>
              </div>
            </div>
          ))}
          {/* TODO: infinite scroll */}
          {/* <div
              ref={lastElementRef}
              style={{ height: "40px", marginTop: "20px" }}
            >
              {isLoading && (
                <p style={{ textAlign: "center" }}>Loading more items...</p>
              )}
              {!hasMoreAssets && (
                <p style={{ textAlign: "center", color: "#888" }}>
                  No more items to load.
                </p>
              )}
            </div> */}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

// TODO: infinite scroll
// const [nextCursor, setNextCursor] = useState<string | null>(null);
// const [isLoading, setIsLoading] = useState(false);
// const [hasMoreAssets, setHasMoreAssets] = useState(true);
// const { data, pagination } = await getClips();
// const { clips, total: clipTotal } = data;
// const { hasMore, cursor } = pagination;
// const getClips = async (cursor = null) => {
//   setIsLoading(true);
//   try {
//     const { data, pagination } = await fetchAssets({ cursor });
//     const { clips, total: clipTotal } = data;
//     setAssetClips((prev) => [...prev, ...clips]);
//     setNextCursor(pagination.cursor);
//     setHasMoreAssets(pagination.hasMore);
//   } catch (error) {
//     console.error(`failed featching feed:${error}`);
//   } finally {
//     setIsLoading(false);
//   }
// };
// const observerRef = useRef<IntersectionObserver>(null);
// const lastElementRef = (node) => {
//   if (isLoading) return;
//   if (observerRef.current) {
//     observerRef.current.disconnect();
//   }
//   observerRef.current = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting && hasMoreAssets) {
//       getClips(nextCursor);
//     }
//     if (node) observerRef.current?.observe(node);
//   });
// };
