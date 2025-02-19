import React from "react";
import styled from "styled-components";
import googleLogo from "../../asset/logos/GoogleLogo.svg";

const GoogleLoginButton: React.FC<Props> = ({ backendURL }) => {
  const buttonText = "구글로 로그인";

  const handleLoginClick = () => {
    window.location.href = `${backendURL}`;
  };

  return (
    <GoogleButton onClick={handleLoginClick}>
      <LogoImage src={googleLogo} alt="Google Logo" />
      {buttonText}
    </GoogleButton>
  );
};

export default GoogleLoginButton;

interface Props {
  backendURL: string;
}

// 구글 버튼 스타일
const GoogleButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #ffffff;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f2f2f2; // Light gray color on hover
  }
`;

//구글 로고 스타일
const LogoImage = styled.img`
  margin-right: 30px;
  width: 60px;
  height: auto;
`;
