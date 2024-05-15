import React, { Suspense } from 'react';

import styles from './promotionsPlate.module.scss';

import { Await, useLoaderData } from 'react-router-dom';
import Loader from '../../../../../ui/loader/Loader';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import PromotionsStockElement from '../promotionsStockElement/PromotionsStockElement';

const PromotionsPlate = () => {
  const { promotions } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <SingleTitle>Акции</SingleTitle>
      <Await resolve={promotions}>
        {(resolvedPromotions) => (
          <div className={styles.stocksBlockPlate}>
            {resolvedPromotions.map((resolvedPromotion, index) => (
              <PromotionsStockElement resolvedPromotion={resolvedPromotion} key={index} />
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default PromotionsPlate;
