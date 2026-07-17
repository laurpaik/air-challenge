"use client";

// mostly pseudocode
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { Icon } from "@mui/material";

const options = [
  { action: "open", link: "link-to-asset", icon: "open-icon", copy: "Open" },
  {
    action: "share",
    link: "link-to-share",
    icon: "share-icon",
    copy: "Share a link",
  },
  {
    action: "copy",
    onClick() {},
    icon: "copy-icon", // CopyIcon element
    copy: "Copy to Air workspace",
  },
  {
    action: "download",
    link: "link-to-download",
    icon: "download-icon",
    copy: "Download",
  },
];
export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘C
          </Typography>
        </MenuItem>
        {options.map((option) => (
          <MenuItem>
            <ListItemIcon>
              <Icon fontSize="small" component={option.icon} />
            </ListItemIcon>
            <ListItemText>{option.copy}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
