import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { useSelector } from 'react-redux';

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
