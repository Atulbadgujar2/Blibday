import React from 'react';
import { AccordionItem } from '../Common';
function FaqList(props) {
  const { data } = props;
  return (
    data.map((item, index) => {
      return <AccordionItem
        key={index}
        title={item?.question}
        content={item?.answer}
        ifopen={index == 0 ? true : false}
        icon={item?.icon}
        {...props}
      />
    })

  );
}
export default FaqList;
