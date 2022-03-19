import React, { useEffect } from 'react';
import { TableProducts } from '../components/ManagePage/Table';
import { useDispatch } from 'react-redux';
import {
    getArticlesData,
    getProductData,
} from '../redux/Shopping/shopping-actions';
import { useSelector } from 'react-redux';
import { TableBodyArticles } from '../components/ManagePage/ArticlesTable';

export const ManagedArticles = () => {
    const data = useSelector((state) => state.shop.articles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticlesData());
    }, []);
    return <TableBodyArticles data={data} />;
};
