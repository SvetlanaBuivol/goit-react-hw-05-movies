import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  margin-top: 20px;
`;

export const ReviewItem = styled.li`
  margin-bottom: 10px;
`;

export const ReviewAuthor = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.p`
  font-size: 14px;
  color: #777777;
`;

export const NoReviewsMessage = styled.h3`
  font-size: 16px;
  color: #777777;
  margin-top: 20px;
`;
