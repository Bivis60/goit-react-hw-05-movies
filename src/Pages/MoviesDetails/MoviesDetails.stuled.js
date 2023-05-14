import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 8px auto;
  padding: 8px 32px;
  background-color: #fff;
  border: solid 1px #000;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

  transition: color 0.2s ease-in-out;
  color: #000000;

  &.active,
  &:hover,
  &:focus {
    color: orange;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  background-color: #e9e2e2;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Image = styled.img`
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;

export const Box = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const UserScore = styled.p`
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Overview = styled.h3`
  margin-bottom: 8px;
`;

export const Info = styled.p`
  margin-bottom: 16px;
`;

export const GenresTitle = styled.h3`
  margin-bottom: 8px;
`;

export const List = styled.li`
  text-align: center;
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 500;
`;