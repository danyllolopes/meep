import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string
  backButton?: boolean
}

const Header = ({ title, backButton}: HeaderProps) => {
  const navigate  = useNavigate()

  return (
    <Box p={2} position="sticky" top={0} bgcolor="#F7F8F5" zIndex={1}>
      {backButton && (
          <Box position="absolute" top={10}>
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
          </Box>
      )}
      <Typography fontSize="1.25rem" textAlign="center" fontWeight={600}> 
          {title}
        </Typography>
    </Box>
  )
}
export default Header;
