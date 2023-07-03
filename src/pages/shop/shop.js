import PropTypes from 'prop-types';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// components
import Label from '../../components/label';



// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({shop}) {

  let status = "";
  if(shop.statusCode === 1001){
    status = "진행중";
  }else if(shop.statusCode === 1002){
    status = "공구 완료";
  }else {
    status = "공구 실패";
  }

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {(
          <Label
            variant="filled"
           
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt='' src={shop.path + shop.sysName} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <a href={`http://localhost/shop/toShopApply?code=${shop.code}`}>
            <Typography variant="subtitle1">
              {shop.title}
            </Typography>
          </a>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle2" noWrap>
            {shop.productName}
            &nbsp;|&nbsp;
            {shop.companyName}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
