import styled from '@emotion/styled';
import React from 'react';
import { media } from '../../../styles/media';
import { css } from '@emotion/react';

/**
 * @description: 로그인 페이지에 사용되는 소셜 로그인 버튼 컴포넌트를 반환
 * @param { Object } props - 소셜 로그인 버튼 컴포넌트에 전달되는 속성
 * @param { string } props.bgColor - 배경 색상
 * @param { string } props.img - 소셜 로그인에서 제공하는 이미지
 * @param { function } props.onClick - 나중에 주석 수정
 * @returns
 */
export function SocialButtonComponent({
  bgColor,
  border,
  color,
  platformIcon,
  loginText,
}) {
  return (
    <SocialButton bgColor={bgColor} color={color} border={border}>
      <div styles={SocialButtonContainer}>
        {platformIcon}
        <span>{loginText}</span>
      </div>
    </SocialButton>
  );
}

// 버튼 컨테이너
const SocialButton = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  border: ${({ border }) => border};
  border-radius: 7px;

  color: ${({ color }) => color};
  font-weight: 500;

  max-width: 400px;
  min-width: 183px;

  // 1. 데스크탑 화면 Media Query 정의
  ${media.desktop`
    width: 70%;
  `}

  // 2. 태블릿 화면 Media Query 정의
  ${media.tablet`
    width: 60%;
  `}

  // 3. 모바일 화면에 맞는 크기로 큰 틀 정의
  ${media.mobile`
    width: 50%;
  `}
`;

const SocialButtonContainer = css``;