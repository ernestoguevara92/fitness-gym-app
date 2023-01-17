import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" />
        <Typography variant="h6" fontWeight="600" color="#FF2625">Red Gorilla</Typography>
        <Typography fontStyle="italic" pb="40px" mt="20px">
        Developed by Roberto Guevara
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer