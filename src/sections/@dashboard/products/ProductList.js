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

  const [shopList, setShopList] = useState([
    // {seq:1,writer:"Jane",message:"React Router"},
    // {seq:2,writer:"Ryan",message:"Router Practice"},
    // {seq:3,writer:"Tom",message:"Practice Hard"}
  ]);

  useEffect(() => {
    axios.request({
      url: "/data/selectShopList"
    }).then((resp) => {
      setShopList(resp.data.shopList);
      console.log(resp.data.shopList[0]);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <Grid container spacing={3}>
      
        {
          shopList.map((shop,i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <ShopProductCard shop={shop}/>
            </Grid>
          ))
        }
      
    </Grid>
  );
}
