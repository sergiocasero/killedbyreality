import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'; 

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import { PressCoverage } from '../../components';
import Link from 'next/link';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    const style = {
        border: 'none',
    };

    return (
        <Link href={url} passHref>
            <a
                css={{
                    border: 'none',
                }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    css={{
                        width: '24px',
                        height: '24px',
                    }}
                    width='24px'
                    height='24px'
                    src={imgSrc}
                    alt={altText}
                />
            </a>
        </Link>
    );
};

const CopyNotice = styled.div(() => css({
    fontSize: '0.75em',
    margin: '30px 0 20px 0',
    textAlign: 'center',
}));


const Title = styled.div(() => css({
    color: '#fafafa',
    fontSize: '2.5em',
    fontWeight: 'lighter',
}));

const FooterTitle = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
}));

const SocialWrapper = styled.div(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',

    ['a']: {
        display: 'block',
        margin: '0 10px',
    },
}));

const Footer = () => (
    <>
        <FooterContainer>
            <FlexWrap>
                <FooterTitle>
                    <div css={{
                        marginRight: '10px',
                    }}>
                        <img height="60px" width="60px" src='https://static.killedbygoogle.com/com/tombstone-alt.svg' alt="Tombstone" />
                    </div>
                    <Title>Killed by the Reality</Title>
                </FooterTitle>
                <div>
                    <p>
                        Killed by the reality es el cementerio de proyectos del estado; una fuente libre y abierta
                        lista de servicios, productos, proyectos y aplicaciones financiados con dinero público descontinuados.
                        Nuestro objetivo es ser una fuente de información fáctica sobre la historia
                        en torno a los proyectos muertos de la administracón pública española.
                    
                        Este proyecto está basado en el proyecto &quot;killed by Google&quot;
                    </p>
                    <p>
                        <a
                            href="https://docs.google.com/spreadsheets/d/1nP5QbObFaM59Jn_HoBVVZVNFoNY1LHR9e5oBBdW_m88/edit#gid=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Los datos se extraen de la base de datos de Jaime Gomez Obregón
            </a>
            &nbsp;, información pública que cualquiera puede visitar. El código fuente está disponible en &nbsp;
            <a
                            href="https://github.com/sergiocasero/killedbytherealit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
            </a>
            .
          </p>
        </div>
                <CopyNotice>
                    <a href="https://github.com/codyogden/killedbygoogle/blob/main/LICENSE">
                        &copy; 2022 Cody Ogden.
          </a>
          &nbsp;-&nbsp;
                </CopyNotice>
                <SocialWrapper>
                    <SocialLink
                        url="https://github.com/sergiocasero/killedbythereality"
                        altText="GitHub"
                        imgSrc='https://static.killedbygoogle.com/com/github.svg'
                    />
                </SocialWrapper>
            </FlexWrap>
        </FooterContainer>
    </>
);
export default Footer;
