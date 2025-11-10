import React from 'react';
import NoDataFound from '../../Common/card/NoDataFound';



const data = [];
const SettingTab = () => {
  return (
    <div className="new-controller-card">
        {data.length === 0
              ? 
             <NoDataFound />
             :
     ""
}
    </div>
  );
};
export default SettingTab;
