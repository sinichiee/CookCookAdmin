import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import ShopSearch from './shop/shopSearch';



// ----------------------------------------------------------------------

export default function ProductsPage() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  const [searchShop, setSearchShop] = useState("");
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    axios.request({
      url: "/data/selectShopList"
    }).then((resp) => {
      setShopList(resp.data.shopList);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const filterShop = shopList.filter((shop) => {
    return shop.title.includes(searchShop);
  });

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          공구샵
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* 검색 창 */}
            <ShopSearch posts={shopList} setSearchShop={setSearchShop} />
          </Stack>
        </Stack>
        {/* 공구샵 리스트 뽑으러 감 */}
        <ProductList shopList={shopList} filterShop={filterShop} />
        
      </Container>
    </>
  );
}
