"use client"
import { styled, Container, Box } from '@mui/material';

const MainWrapper = styled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
  }));


const PageWrapper = styled('div')(() => ({
    display: 'flex',
    flexGrow: 1,
    paddingBottom: '60px',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: 'transparent',
  }));

export default function AuthPage(){
    return (
        <MainWrapper className='mainwrapper'>
                    <Box>
                        <h1>Auth Page</h1>
                    </Box>
            <PageWrapper className='page-wrapper'>
            </PageWrapper>
            </MainWrapper>
    )
}