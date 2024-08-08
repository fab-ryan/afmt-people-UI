'use client';
import { Grid, Box } from '@mui/material';
import { PageContainer } from '@/components';
export default function Home() {
  return (
    <PageContainer
      title='Home'
      description='this is Home'
    >
      <Box mt={3}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            lg={12}
          >
            <h1>Home</h1>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
