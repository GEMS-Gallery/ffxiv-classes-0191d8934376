import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { backend } from '../../declarations/backend';

interface ClassDetail {
  name: string;
  role: string;
  image: string;
  pros: string[] | null;
  cons: string[] | null;
}

const ClassDetails: React.FC = () => {
  const { className } = useParams<{ className: string }>();
  const [classDetails, setClassDetails] = useState<ClassDetail | null>(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      if (className) {
        try {
          const result = await backend.getClassDetails(className);
          if (result) {
            setClassDetails(result);
          } else {
            console.error('Class details not found');
          }
        } catch (error) {
          console.error('Error fetching class details:', error);
        }
      }
    };

    fetchClassDetails();
  }, [className]);

  if (!classDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button component={Link} to="/" variant="outlined" sx={{ mb: 2 }}>
        Back to Class List
      </Button>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`/images/${classDetails.image}`}
          alt={classDetails.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {classDetails.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Role: {classDetails.role}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Pros:
          </Typography>
          <List>
            {classDetails.pros?.map((pro, index) => (
              <ListItem key={index}>
                <ListItemText primary={pro} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" gutterBottom>
            Cons:
          </Typography>
          <List>
            {classDetails.cons?.map((con, index) => (
              <ListItem key={index}>
                <ListItemText primary={con} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ClassDetails;
