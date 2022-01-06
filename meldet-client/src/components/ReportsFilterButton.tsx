import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/filterList";
import ReportsFilter from "./ReportsFilter";


export default function ReportsFilterButton() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const togglePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const open = Boolean(anchorEl);
  const id = open ? "reports-filter-popover" : undefined;

  return (
    
            <div>
              <IconButton aria-describedby={id} onClick={togglePopover}>
                <FilterListIcon />
              </IconButton>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{ padding: 2, maxWidth: 450 }}
              >
                <ReportsFilter handleClose={handleClose} />
                
              </Popover>
            </div>
          
  );
}
