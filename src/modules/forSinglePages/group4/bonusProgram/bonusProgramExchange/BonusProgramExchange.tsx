import React from 'react';

import styles from './bonusProgramExchange.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';

const BonusProgramExchange: React.FC = () => {
  const rubRate = useSelector((state: RootState) => state.exchange.RUB);
  const tenRate = useSelector((state: RootState) => state.exchange.KZT);

  return (
    <div className={styles.currentBonusPlate}>
      <h3 className={styles.currentBonusPlateText}>
        <p>1 балл = {Math.ceil(tenRate * 0.1)} ₸</p>
        <p>1 балл = 10 ¢ (0.1 $)</p>
        <p>1 балл = {Math.ceil(rubRate * 0.1)} ₽</p>
      </h3>
    </div>
  );
};

export default BonusProgramExchange;
