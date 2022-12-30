/*
 * HomePage
 *
 */

import { Layout } from '@strapi/design-system/Layout';
import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import React, { memo } from 'react';
import { useModels } from '../../hooks';

const HomePage = () => {
  const { isLoading: isLoadingForModels } = useModels();

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  // #custom-change (removed everything besides main layout)

  return <Layout></Layout>;
};

export default memo(HomePage);
