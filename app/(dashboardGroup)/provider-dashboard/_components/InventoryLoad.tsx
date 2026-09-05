import React from 'react';
import { getMyGears } from '../_actions/provider.action';

const InventoryLoad = async() => {
    const myGears = await getMyGears()
    const myGearsData = myGears.data
    return (
        <div>
            my gears data
        </div>
    );
};

export default InventoryLoad;