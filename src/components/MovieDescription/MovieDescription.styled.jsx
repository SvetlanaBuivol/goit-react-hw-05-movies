import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const MovieDetailsContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const MovieImage = styled.div`
  flex: 1;
  margin-right: 20px;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const MovieInfo = styled.div`
  flex: 2;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const MovieYear = styled.span`
  font-size: 18px;
  color: #777777;
`;

export const MovieReleaseDate = styled.p`
  font-size: 16px;
  color: #777777;
  margin: 10px 0;
`;

export const MovieGenres = styled.p`
  font-size: 16px;
  color: #777777;
  margin: 5px 0;
`;

export const Rating = styled.p`
  font-size: 16px;
  color: #777777;
  margin-bottom: 10px;
`;

export const OverviewHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  color: #777777;
`;

export const NavigationLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 20px;
`;

export const NavigationLinkItem = styled.li`
  margin-right: 10px;

  a {
    text-decoration: none;
    color: #555;
    font-size: 16px;
    transition: color 0.3s ease, font-weight 0.3s ease;

    &:hover {
      color: #333;
      font-weight: bold;
    }
  }
`;

export const GoBackLink = styled(Link)`
  margin-right: auto;
  text-decoration: none;
  color: #555;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
    font-weight: bold;
  }
`;

export const BackIcon = styled(FiArrowLeft)`
  margin-right: 5px;
`;
