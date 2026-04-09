import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const ProfileCard = ({ name, photo, description }) => {
  return (
    // sx - це спеціальний проп в MUI для швидкого додавання стилів
    <Card sx={{ maxWidth: 345, margin: '40px auto', boxShadow: 3, borderRadius: 2 }}>
      
      {/* Фото профілю */}
      <CardMedia
        component="img"
        height="250"
        image={photo || "https://via.placeholder.com/250"}
        alt={name}
      />
      
      {/* Текстова інформація */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
      {/* Кнопка */}
      <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
        <Button variant="contained" color="primary" size="large">
          Підписатися
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;