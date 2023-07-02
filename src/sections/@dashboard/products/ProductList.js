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


export default function ProductList() {

  const [searchShop, setSearchShop] = useState({search:""});
  const [shopList, setShopList] = useState([]);

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
    <>
      <ShopSearch posts={shopList} setSearchShop={setSearchShop} />
      
      <Grid container spacing={3}>
        {
          shopList.map((shop, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <ShopProductCard shop={shop} searchShop={searchShop} />
            </Grid>
          ))
        }

      </Grid>
    </>
  );
}
