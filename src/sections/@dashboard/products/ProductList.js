import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { Stack } from 'react-bootstrap';
import ShopProductCard from '../../../pages/shop/shop';


// ----------------------------------------------------------------------
// 값 받아오기
// ProductList.propTypes = {
//   products: PropTypes.array.isRequired,
// };


export default function ProductList({ filterShop }) {

  console.log(filterShop);
  if(filterShop === null){
    
    console.log("값이없다");
  }
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
