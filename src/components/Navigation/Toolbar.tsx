import { Toolbar as MuiToolbar, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

interface ToolbarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

export default function Toolbar({ open, handleDrawerOpen }: ToolbarProps) {
  return (
    <MuiToolbar color="transparent">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" }),
        }}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ color: "black" }}>
        {process.env.REACT_APP_TITLE}
      </Typography>
    </MuiToolbar>
  );
}
