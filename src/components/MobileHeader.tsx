import styled from 'styled-components';

export default function MobileHeader({
	active,
	setActive,
}: {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<HeaderStyles className="mobileHeader">
			<div>
				<input
					type="checkbox"
					id="hamburg"
					checked={active}
					onChange={(e) => setActive(e.target.checked)}
				/>
				<label htmlFor="hamburg" className="hamburg">
					<span className="line" />
					<span className="line" />
					<span className="line" />
				</label>
			</div>
		</HeaderStyles>
	);
}

const HeaderStyles = styled.div`
position: fixed;
top: 20px;
left: 0;
width: 100%;
height: 50px;
background-color: transparent;
color: #fff;
text-align: center;
line-height: 50px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
z-index: 1000;

`;
