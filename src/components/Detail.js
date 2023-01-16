import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { height } from '@mui/system';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      description: 'Body Part',
    },
    {
      icon: TargetImage,
      name: target,
      description: 'Target Muscle',
    },
    {
      icon: EquipmentImage,
      name: equipment,
      description: 'Equipment',
    },
  ];

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best
          exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
            <Stack direction="column" alignItems="center" sx={{ 
              background: '#FFF2DB', borderRadius: '50%', width: '105px', height: '105px', pt: '10px'}}>
              <Button>
                <img src={item.icon} alt={item.description} style={{ 
                  width: '50px', height: '50px'}} />
              </Button>
              <Typography sx={{fontSize: '12px', color: '#FCC757'}}>
                {item.description}
              </Typography>
            </Stack>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail