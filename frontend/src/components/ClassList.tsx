import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { backend } from '../../declarations/backend';

interface Class {
  name: string;
  role: string;
  image: string;
}

const ClassList: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const result = await backend.getClasses();
        setClasses(result);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Final Fantasy XIV Classes
      </Typography>
      <Grid container spacing={4}>
        {classes.map((classItem) => (
          <Grid item key={classItem.name} xs={12} sm={6} md={4}>
            <Card component={Link} to={`/class/${classItem.name}`} sx={{ textDecoration: 'none', height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={`/images/${classItem.image}`}
                alt={classItem.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {classItem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Role: {classItem.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClassList;
