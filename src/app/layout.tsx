import Container from './components/Layout/Container';
import RightSidedContainer from './components/Layout/RightSidedContainer';
import TopNavBar from './components/Layout/TopNavBar';
import './globals.css';
import React from 'react';
export default function RootLayout({
  description,
  talents,
  infoList,
  footer,
}: Readonly<{
  children: React.ReactNode;
  description: React.ReactNode;
  talents: React.ReactNode;
  infoList: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#08AABA] bg-custom-gradient  flex flex-col gap-20 pb-20">
          <Container>
            <TopNavBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between min-h-[100%]">
              {description}
              {talents}
            </div>
          </Container>
          <RightSidedContainer>{infoList}</RightSidedContainer>
        </div>
        <Container>{footer}</Container>
      </body>
    </html>
  );
}
