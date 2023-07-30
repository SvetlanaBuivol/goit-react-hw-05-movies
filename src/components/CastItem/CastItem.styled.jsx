import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CastItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 230px;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.7s ease-in;
`;

export const CastItemImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

export const CastItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CastItemName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CastItemCharacter = styled.p`
  font-size: 14px;
  color: #777777;
`;
