import styled from 'styled-components';

export const NavigationList = styled.ul`
    color: var(--starColor);
    font-size: 42px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

    li {
        list-style: none;
        transition: transform 0.3s ease-out;
    };
    li:hover {
        transition-duration: 0.2s;
        transform: scale(1.3);
    };


`;

export const NavigationWrapper = styled.div`
	background-color: var(--endlessSpace);
	overflow: hidden;
	width: 100%;
	height: 100vh;
`;

export const NavigationInnerWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #000000b5;
`;

export const Stars = styled.div`
	width: 1px;
	height: 1px;
	background: transparent;
	box-shadow:
		483px 450px var(--starColor), 1995px 525px var(--starColor), 755px 1459px var(--starColor), 610px 1246px var(--starColor), 764px 1850px var(--starColor), 1274px 1697px var(--starColor), 1227px 37px var(--starColor), 1090px 506px var(--starColor), 341px 1005px var(--starColor), 1002px 755px var(--starColor), 693px 1497px var(--starColor), 1797px 1626px var(--starColor), 1838px 793px var(--starColor), 802px 881px var(--starColor), 1117px 1983px var(--starColor), 352px 1465px var(--starColor), 1526px 852px var(--starColor), 1559px 526px var(--starColor), 517px 516px var(--starColor), 1380px 244px var(--starColor), 662px 1531px var(--starColor), 1544px 518px var(--starColor), 253px 879px var(--starColor), 774px 1629px var(--starColor), 752px 994px var(--starColor), 1129px 726px var(--starColor), 232px 1050px var(--starColor), 1766px 290px var(--starColor), 1976px 842px var(--starColor), 662px 1535px var(--starColor), 257px 1016px var(--starColor), 665px 708px var(--starColor), 1476px 1772px var(--starColor), 261px 498px var(--starColor), 719px 1459px var(--starColor), 469px 438px var(--starColor), 994px 474px var(--starColor), 744px 808px var(--starColor), 1609px 1741px var(--starColor), 898px 260px var(--starColor), 1978px 1436px var(--starColor), 904px 1244px var(--starColor), 123px 773px var(--starColor), 6px 923px var(--starColor), 1973px 1778px var(--starColor), 1470px 1861px var(--starColor), 1037px 156px var(--starColor), 554px 1905px var(--starColor), 1508px 849px var(--starColor), 1213px 1603px var(--starColor), 87px 1907px var(--starColor), 492px 527px var(--starColor), 91px 213px var(--starColor), 492px 15px var(--starColor), 1357px 1157px var(--starColor), 637px 240px var(--starColor), 1515px 281px var(--starColor), 1757px 682px var(--starColor), 1035px 1298px var(--starColor), 1019px 1233px var(--starColor), 25px 162px var(--starColor), 262px 884px var(--starColor), 1328px 965px var(--starColor), 984px 879px var(--starColor), 1213px 689px var(--starColor), 623px 1091px var(--starColor), 1227px 422px var(--starColor), 1977px 1025px var(--starColor), 620px 474px var(--starColor), 528px 1525px var(--starColor);
	animation: animStar 40s linear infinite;
	&:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 1px;
	height: 1px;
	background: transparent;
	box-shadow:
		483px 450px var(--starColor), 1995px 525px var(--starColor), 755px 1459px var(--starColor), 610px 1246px var(--starColor), 764px 1850px var(--starColor), 1274px 1697px var(--starColor), 1227px 37px var(--starColor), 1090px 506px var(--starColor), 341px 1005px var(--starColor), 1002px 755px var(--starColor), 693px 1497px var(--starColor), 1797px 1626px var(--starColor), 1838px 793px var(--starColor), 802px 881px var(--starColor), 1117px 1983px var(--starColor), 352px 1465px var(--starColor), 1526px 852px var(--starColor), 1559px 526px var(--starColor), 517px 516px var(--starColor), 1380px 244px var(--starColor), 662px 1531px var(--starColor), 1544px 518px var(--starColor), 253px 879px var(--starColor), 774px 1629px var(--starColor), 752px 994px var(--starColor), 1129px 726px var(--starColor), 232px 1050px var(--starColor), 1766px 290px var(--starColor), 1976px 842px var(--starColor), 662px 1535px var(--starColor), 257px 1016px var(--starColor), 665px 708px var(--starColor), 1476px 1772px var(--starColor), 261px 498px var(--starColor), 719px 1459px var(--starColor), 469px 438px var(--starColor), 994px 474px var(--starColor), 744px 808px var(--starColor), 1609px 1741px var(--starColor), 898px 260px var(--starColor), 1978px 1436px var(--starColor), 904px 1244px var(--starColor), 123px 773px var(--starColor), 6px 923px var(--starColor), 1973px 1778px var(--starColor), 1470px 1861px var(--starColor), 1037px 156px var(--starColor), 554px 1905px var(--starColor), 1508px 849px var(--starColor), 1213px 1603px var(--starColor), 87px 1907px var(--starColor), 492px 527px var(--starColor), 91px 213px var(--starColor), 492px 15px var(--starColor), 1357px 1157px var(--starColor), 637px 240px var(--starColor), 1515px 281px var(--starColor), 1757px 682px var(--starColor), 1035px 1298px var(--starColor), 1019px 1233px var(--starColor), 25px 162px var(--starColor), 262px 884px var(--starColor), 1328px 965px var(--starColor), 984px 879px var(--starColor), 1213px 689px var(--starColor), 623px 1091px var(--starColor), 1227px 422px var(--starColor), 1977px 1025px var(--starColor), 620px 474px var(--starColor), 528px 1525px var(--starColor);
}
`;

export const MoreStars = styled.div`
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow:
		1585px 315px var(--starColor), 1750px 858px var(--starColor), 502px 1184px var(--starColor), 1482px 150px var(--starColor), 870px 93px var(--starColor), 1401px 1976px var(--starColor), 494px 1549px var(--starColor), 1607px 1894px var(--starColor), 1029px 1466px var(--starColor), 1931px 1390px var(--starColor), 819px 1431px var(--starColor), 521px 1062px var(--starColor), 1754px 574px var(--starColor), 577px 943px var(--starColor), 850px 1377px var(--starColor), 445px 1835px var(--starColor), 1658px 1675px var(--starColor), 521px 1144px var(--starColor), 560px 1624px var(--starColor), 1329px 1778px var(--starColor);
	animation: animStar 60s linear infinite;

	&:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow:
		1585px 315px var(--starColor), 1750px 858px var(--starColor), 502px 1184px var(--starColor), 1482px 150px var(--starColor), 870px 93px var(--starColor), 1401px 1976px var(--starColor), 494px 1549px var(--starColor), 1607px 1894px var(--starColor), 1029px 1466px var(--starColor), 1931px 1390px var(--starColor), 819px 1431px var(--starColor), 521px 1062px var(--starColor), 1754px 574px var(--starColor), 577px 943px var(--starColor), 850px 1377px var(--starColor), 445px 1835px var(--starColor), 1658px 1675px var(--starColor), 521px 1144px var(--starColor), 560px 1624px var(--starColor), 1329px 1778px var(--starColor);
}
`;

export const EvenMoreStars = styled.div`
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow:
		91px 409px var(--starColor), 1886px 728px var(--starColor), 1294px 970px var(--starColor), 720px 1215px var(--starColor), 796px 1431px var(--starColor), 834px 1217px var(--starColor), 1926px 1164px var(--starColor), 1803px 310px var(--starColor), 1532px 1421px var(--starColor), 1680px 232px var(--starColor);
	animation: animStar 100s linear infinite;
&:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow:
		91px 409px var(--starColor), 1886px 728px var(--starColor), 1294px 970px var(--starColor), 720px 1215px var(--starColor), 796px 1431px var(--starColor), 834px 1217px var(--starColor), 1926px 1164px var(--starColor), 1803px 310px var(--starColor), 1532px 1421px var(--starColor), 1680px 232px var(--starColor);
}
`;
