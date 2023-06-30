import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ShopProductCard from '../../../pages/shop/shop';


// ----------------------------------------------------------------------
// 값 받아오기
// ProductList.propTypes = {
//   products: PropTypes.array.isRequired,
// };


export default function ProductList() {

  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    axios.request({
      url: "/data/selectShopList"
    }).then((resp) => {
      setShopList(resp.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <ShopProductCard />
      </Grid>
    </Grid>
  );
}
