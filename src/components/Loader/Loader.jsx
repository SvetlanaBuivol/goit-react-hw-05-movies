import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => (
  <LoaderWrap>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClassName=""
      visible={true}
    />
  </LoaderWrap>
);

export default Loader;
