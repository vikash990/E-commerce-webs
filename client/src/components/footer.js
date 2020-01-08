import React from 'react';
import styled from "styled-components";

import logof from '../Images/facebook.png';
import logot from '../Images/twitter.png';
import logol from '../Images/linkdin.png';
import logoi from '../Images/instagram.jpg';


const FooterWrapper = styled('div')`
    
    
    background: rgba(60, 60, 60,0.6);
    min-height:15vh;
    
`;
const LogoWrapper = styled('div')`
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    padding:40px 40px;
`;

const TextWrapper = styled('div')`
    
    padding: 12px 12px;
`;





class Footer extends React.Component{

    render(){
        return(
           <FooterWrapper>
                <TextWrapper>
                   <h4>Bikers</h4>
                 </TextWrapper>
                      
                    <LogoWrapper> 
                            <a href="https://www.facebook.com/vikashdubeycodingclub" target="_blank"><img src={logof}/></a>
                            <a href="https://twitter.com/VikashD39681388" target="_blank"><img src={logot}/></a>
                            <a href="https://www.linkedin.com/in/vikash-dubey-1b7914171/" target="_blank"><img src={logol}/></a>
                            <a href="https://www.instagram.com/vikash__dubey__/" target="_blank"><img src={logoi}/></a>
                    </LogoWrapper>
                
            </FooterWrapper>
     );
    }
}
export default Footer;