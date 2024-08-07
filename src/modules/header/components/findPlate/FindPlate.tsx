import React, { Dispatch, SetStateAction } from 'react';

import styles from './findPlate.module.scss';
import Pad from '../../../../ui/pad/Pad';

import { HandySvg } from 'handy-svg';

import ExitSvg from '../../../../assets/svg/exit.svg';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface FindPlateProps {
  visible: string;
  setVisible: Dispatch<SetStateAction<string>>;
  oldFinds: string[];
  setOldFinds: Dispatch<SetStateAction<string[]>>;
}

const FindPlate: React.FC<FindPlateProps> = ({ visible, setVisible, oldFinds, setOldFinds }) => {
  const route = useNavigate();

  function delString(index) {
    const newArr = oldFinds.slice();
    newArr.splice(index, 1);
    setOldFinds(newArr);
    Cookies.set('oldFinds', JSON.stringify(newArr), { expires: 90 });
  }

  function visString(findString) {
    route(`/find/${findString}`);
    setVisible(styles.visibleNone);
    Cookies.set('oldFinds', JSON.stringify(oldFinds), { expires: 90 });
  }

  useEffect(() => {
    const mv = Cookies.get('oldFinds');
    {
      mv && setOldFinds(JSON.parse(mv));
    }
  }, []);

  return (
    <Pad>
      {oldFinds.length > 0 && (
        <div className={styles.findPlate + ' ' + visible}>
          {oldFinds.map((oldFind, index) => (
            <div className={styles.findTextPlate} key={index}>
              <p className={styles.findText} onClick={() => visString(oldFind)}>
                {oldFind}
              </p>
              <p onClick={() => delString(index)}>
                <HandySvg src={ExitSvg} className={styles.exitSvg} />
              </p>
            </div>
          ))}
        </div>
      )}
    </Pad>
  );
};

export default FindPlate;
