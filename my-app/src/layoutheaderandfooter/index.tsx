import Footer from '@/footer';
import Header from '@/header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function LayoutHeaderandFooter({ children }: Props) {
  return (
    <div>
        
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default LayoutHeaderandFooter;
