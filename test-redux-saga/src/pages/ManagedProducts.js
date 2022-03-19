import React, { useEffect } from 'react';
import { TableProducts } from '../components/ManagePage/Table';
import { useDispatch } from 'react-redux';
import { getProductData } from '../redux/Shopping/shopping-actions';
import { useSelector } from 'react-redux';

export const ManagedProducts = () => {
    const data = useSelector((state) => state.shop.graphqlData.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductData());
    }, []);
    return <TableProducts data={data} />;
};
