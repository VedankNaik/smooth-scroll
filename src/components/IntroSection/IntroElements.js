import styled from 'styled-components';

export const IntroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const IntroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;



export const IntroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8p 24px;
    display: flex;
    flex-direction: column;
    align-items: center;    
`; 

export const IntroH1 = styled.h1`
    color: #fff;
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 40px;      
    }

    @media screen and (max-width: 480) {
        font-size: 320px;      
    }
`

export const IntroP = styled.div`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;      
    }

    @media screen and (max-width: 480) {
        font-size: 18px;      
    }
`

