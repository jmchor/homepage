import styled from 'styled-components';

export default function Footer({
	text,
	bgColor,
}: { text: string; bgColor: string }) {
	return (
		<FooterStyles $bgColor={bgColor}>
			<p>{text}</p>
			<img
				src="/esc_invert.png"
				alt=""
				style={{ width: '30px', height: '30px' }}
			/>
		</FooterStyles>
	);
}
const FooterStyles = styled.footer<{ $bgColor: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: #fff;
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

`;
