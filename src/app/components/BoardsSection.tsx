"use client";
// import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Board } from "../api/boards";
import styles from "./BoardsSection.module.css";

interface BoardSectionProps {
  boards: Board[];
  total: number;
}

export default function BoardSection({
  boards = [],
  total,
}: BoardSectionProps) {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={`assets-content`}
          id={`assets-header`}
        >
          Boards ({total})
        </AccordionSummary>
        <AccordionDetails>
          <Box
            className={styles.boardsContainer}
            sx={{ width: "100%", mx: "auto", p: 2 }}
          >
            {boards.map((board) => (
              <Card key={board.id} sx={{ mb: 2 }}>
                <CardMedia
                  component={"img"}
                  src={
                    board.thumbnails?.[0] ||
                    "https://placehold.co/200x200/000000/FFF"
                  }
                  image={
                    board.thumbnails?.[0] ||
                    "https://placehold.co/200x200/000000/FFF"
                  }
                  alt={board.title || ""}
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "200px",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                  }}
                />
              </Card>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
