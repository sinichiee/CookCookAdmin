import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { Stack } from 'react-bootstrap';
import ShopProductCard from '../../../pages/shop/shop';

// ----------------------------------------------------------------------
// 값 받아오기
// ProductList.propTypes = {
//   products: PropTypes.array.isRequired,
// };

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    />
  );
};


export default function ProductList({ filterShop, searchShop }) {

  console.log(filterShop);
  if (filterShop.length === 0) {
    console.log('a')
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'center'}}>
          <HorizonLine />
          <br />
          <strong>&quot;{searchShop}&quot;</strong>에 대한 검색결과가 없습니다.
          <br /> 다른 검색어를 입력해 보세요😥.
          <br /><br />
          <HorizonLine/>
        </Grid>
      </Grid>
    );
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
