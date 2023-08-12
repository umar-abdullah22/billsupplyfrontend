import { Fragment, useEffect } from 'react';
import niceSelect from 'react-nice-select';
import VideoPopup from '../Frontend/VideoPopup';
import Footer from './Footer';
import Header from './Header';
import '../../styles/css/style.css';
import '../../styles/css/default.css';
import '../../styles/fonts/flaticon/flaticon.css';

const Layout = ({ children, header, footer, extraBodyCls, singleMenus }) => {
  useEffect(() => {
    document.querySelector('body').className = extraBodyCls || 'fintex';

    return () => {
      niceSelect({ withoutwide: true });
    };
  }, [extraBodyCls]);

  return (
    <>
      <VideoPopup />
      <Header header={header} singleMenus={singleMenus} />
      {children}
      <Footer footer={footer} />
    </>
  );
};
export default Layout;
