import React, { ReactNode } from 'react';

import styles from './filterBlock.module.scss';
import Checkbox from '../checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.scss';
import { FilterType } from '../../store/types/filterProductsReducer';
import { AnyAction } from 'redux';

interface FilterBlockProps {
  children: ReactNode;
  params: FilterType[];
  // eslint-disable-next-line no-unused-vars
  changeValue: (payload: number) => void;
  // eslint-disable-next-line no-unused-vars
  delValue: (payload: number) => void;
  value: number[];
  addStyles?: string;
}

const FilterBlock: React.FC<FilterBlockProps> = ({
  children,
  params,
  changeValue,
  delValue,
  value,
  addStyles,
}) => {
  const dispatchFilter = useDispatch();

  const [visibleFull, setVisibleFull] = useState(false);

  function getParams(id) {
    const findElement = value.findIndex((item) => item === id);
    {
      findElement === -1
        ? dispatchFilter(changeValue(id) as unknown as AnyAction)
        : dispatchFilter(delValue(id) as unknown as AnyAction);
    }
  }

  {
    params.length > 5 && params.slice(0, 5);
  }

  const slicedParams = params.length > 5 && !visibleFull ? params.slice(0, 5) : params;

  return (
    <>
      {params.length > 0 && (
        <>
          <h4 className={styles.filterTitle + ' ' + addStyles}>{children}</h4>
          <CSSTransition in={visibleFull} timeout={600} classNames="paramsList">
            <div className={'paramsList'}>
              {slicedParams.map((element) => (
                <div className={styles.filterElement} key={element.id}>
                  <p className={styles.filterText} onClick={() => getParams(element.id)}>
                    {element.name}
                    <span className={styles.filterCount}>{element.count}</span>
                  </p>
                  <Checkbox
                    checked={value.findIndex((item) => item === element.id) === -1 ? false : true}
                    onChange={() => getParams(element.id)}
                  />
                </div>
              ))}
              {params.length > 5 && (
                <div className={styles.filterElement} onClick={() => setVisibleFull(!visibleFull)}>
                  <p className={styles.filterTextDop}>{visibleFull ? 'Скрыть...' : 'Показать всё...'}</p>
                </div>
              )}
            </div>
          </CSSTransition>
        </>
      )}
    </>
  );
};

export default FilterBlock;
