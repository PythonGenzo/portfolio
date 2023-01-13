
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prasanth Portfolio
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Skill</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact Me</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
