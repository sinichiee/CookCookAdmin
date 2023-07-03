import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { BasketPieChart, MealPieChart, TotalPieChart } from './gptCount/gptCount';
import { CurrentVisits } from './userList/userList';
import { BoardChart } from './boardCart/boardCart';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          CookCook
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TotalPieChart />
          </Grid>

          <Grid item xs={12} md={4}>
            <MealPieChart />
          </Grid>

          <Grid item xs={12} md={4}>
            <BasketPieChart />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
          <BoardChart />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentVisits />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
