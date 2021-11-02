import {
  Card,
  Grid,
  Container,
  CardHeader,
  CardContent,
} from '@mui/material';
import * as React from 'react';
import { useItem } from '../hook/hook';
import style from '../styles/style';
import { useParams } from 'react-router-dom';



export default function FormValidation(props) {
  const { id } = useParams()
  const { initFields } = useItem({ id });

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ position: 'static' }}>
            <CardHeader title="React Hook Form" />
            <CardContent>{initFields()}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
