import React from 'react';
import {Datepicker} from '@ui-kitten/components';

const CostomDatePicker = props => {
  const {onSelectDate} = props; //obje dağıtma yöntem
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

export default CostomDatePicker;
