import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import auth from '../auth/auth-helper';

const QualificationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const jwt = auth.isAuthenticated();
    try {
      const response = await fetch('/api/qualifications', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt.token}`
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Qualification saved');
      } else {
        alert(result.error || 'Error saving qualification');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h5" mb={2}>Add Qualification</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Degree"
            fullWidth
            margin="normal"
            {...register('degree', { required: 'Degree is required' })}
            error={!!errors.degree}
            helperText={errors.degree?.message}
          />
          <TextField
            label="Institution"
            fullWidth
            margin="normal"
            {...register('institution', { required: 'Institution is required' })}
            error={!!errors.institution}
            helperText={errors.institution?.message}
          />
          <TextField
            label="Year"
            fullWidth
            margin="normal"
            {...register('year')}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default QualificationForm;
