/*
 * HomePage
 *
 */

import React, { memo } from 'react';
import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import { Layout } from '@strapi/design-system/Layout';
import { useModels } from '../../hooks';

const HomePage = () => {
  const { isLoading: isLoadingForModels } = useModels();

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  return (
    <Layout>
    </Layout>
  );
};

export default memo(HomePage);
