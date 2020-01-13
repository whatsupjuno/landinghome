import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <Layout>
        <Title>상담 신청하기</Title>
        <Message>3개월, 6개월, 12개월 뒤 우리 아이 모습은?</Message>
        <Message>
          아이의 레벨을 테스트하여 향후 어떤 모습으로 변화하는지 미리
          알려드립니다!
        </Message>
        <Message>상담받을 성함과 연락처를 남겨주시면 연락드립니다.</Message>
        <form
          action="MAILTO:whatsupjuno@gmail.com"
          method="post"
          encType="text/plain"
        >
          <InputBoxLayout>
            <InputBox type="text" placeholder="성함"></InputBox>
            <InputBox type="text" placeholder="연락처"></InputBox>
          </InputBoxLayout>
          <TextAreaBox row="10" placeholder="내용"></TextAreaBox>
        </form>
        <ButtonLayout>
          <Button>상담 신청하기</Button>
        </ButtonLayout>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 0px;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 600px;
  margin: 50px auto;
  @media only screen and (max-width: 720px) {
    width: 90%;
    margin: 20px auto;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 30px;
  @media only screen and (max-width: 720px) {
    font-size: 25px;
  }
`;

const Message = styled.p`
  font-size: 20px;
  color: #4b4b4b;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 720px) {
    font-size: 18px;
  }
`;

const InputBoxLayout = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 5px;
  margin-top: 20px;
`;

const InputBox = styled.input`
  border: none;
  padding: 10px;
  font-size: 15px;
`;

const TextAreaBox = styled.textarea`
  margin-top: 5px;
  padding: 10px;
  font-size: 15px;
  width: calc(100% - 20px);
  height: 200px;
  border: none;
  resize: none;
`;

const ButtonLayout = styled.div`
  width: 400px;
  margin: 50px auto;
  text-align: center;
  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`;

const Button = styled.span`
  cursor: pointer;
  font-size: 30px;
  width: 300px;
  padding: 25px 50px;
  background: #5db310;
  border-radius: 50px;
  color: white;
  @media only screen and (max-width: 720px) {
    font-size: 25px;
    width: 250px;
    padding: 20px 20px;
  }
`;
