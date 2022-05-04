import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { CustomContainer } from '@components/layouts';
import { footerConfig } from './footer.const';

const Footer = () => {
  const [isFooterBottom, setFooterBottom] = useState(false);

  useEffect(() => {
    (function checkPositionFooter() {
      const isHasScrollbar = document.body.scrollHeight > document.body.clientHeight;
      setFooterBottom(!isHasScrollbar);
    })();
  }, [isFooterBottom]);

  return (
    <footer
      className={clsx(
        'bg-[#000000D9] text-[#fff] mt-10 w-full',
        isFooterBottom && 'absolute bottom-0',
      )}>
      <CustomContainer>
        <Row className="py-10">
          {footerConfig.map(({ title, detailContract }, index) => (
            <Col span={6} key={index}>
              <Row>
                <Col className="font-semibold mb-4">{title}</Col>
              </Row>
              {detailContract.map(({ name }, index) => (
                <Row key={index}>
                  <Col className="text-[12px] font-medium mb-4">{name}</Col>
                </Row>
              ))}
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
