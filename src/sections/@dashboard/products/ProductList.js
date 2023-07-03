import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import ShopProductCard from '../../../pages/shop/shop';
import ShopSearch from '../../../pages/shop/shopSearch';


// ----------------------------------------------------------------------
// 값 받아오기
// ProductList.propTypes = {
//   products: PropTypes.array.isRequired,
// };


export default function ProductList({ filterShop }) {

  console.log(filterShop);

  return (
    <Grid container spacing={3}>
        {
          filterShop.map((shop, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <ShopProductCard shop={shop} />
            </Grid>
          ))
        }
    </Grid>
  );
}
