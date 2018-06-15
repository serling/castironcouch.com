// Eksempelgruppe/eksempelside
import React from 'react';

import Layout from '../../layout';
import Info from '../../../components/info';

import content from './extra-info.json';

const ExtraInfo = () => (
  <Layout showFooter={false} showHeader={false}>
    <Info text={content.text} />
  </Layout>
);

ExtraInfo.propTypes = {};

export default ExtraInfo;
