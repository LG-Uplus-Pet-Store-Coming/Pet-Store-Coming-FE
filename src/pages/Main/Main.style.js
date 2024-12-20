/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  imageGrid: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 20px 0 20px;
  `,
  mainImage: css`
    width: 100%;
    border-radius: 15px;
    /* margin: 0 20px; */
    cursor: pointer;
  `,
  textContainer: css`
    width: 100%;
    margin-top: 20px;
  `,
  title: css`
    font-weight: 700;
    font-size: 22px;
    font-weight: bold;
    & > span {
      color: #9a9a9a;
    }
  `,
  subtitle: css`
    font-weight: 500;
    font-size: 18px;
    margin-top: 10px;
  `,
  subImagesContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 30px;
  `,
  subImageWrapper: css`
    width: 100%;
    aspect-ratio: 1;
  `,
  subImage: css`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    cursor: pointer;
  `,
};
