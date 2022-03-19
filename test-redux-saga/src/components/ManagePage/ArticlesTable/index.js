import React, { useState, useRef } from 'react';
import {
    CardMedia,
    Fade,
    IconButton,
    Modal,
    TableCell,
    TextField,
    Typography,
    Backdrop,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableSortLabel,
    TableRow,
    TableBody,
} from '@material-ui/core';
import {
    DeleteForeverOutlined,
    EditOutlined,
    FindInPageOutlined,
} from '@material-ui/icons';
import './TableBody.scss';
import { useDispatch } from 'react-redux';
import { loadCurrentItem } from '../../../redux/Shopping/shopping-actions';
import { useHistory } from 'react-router-dom';

export const TableBodyArticles = ({
    data,
    //   deleteProduct,
    //   changeEditFormData,
    //   handleClose,
    //   handleOpen,
    //   open,
    //   editForm,
    //   update,
}) => {
    const dispatch = useDispatch();
    const router = useHistory();
    const viewDetail = (id) => {
        router.push(`/products/${id}`);
        dispatch(loadCurrentItem(id));
    };

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell width="30%" className="tableHeaderCell">
                                <TableSortLabel>Title</TableSortLabel>
                            </TableCell>
                            <TableCell className="tableHeaderCell">
                                <TableSortLabel>Description</TableSortLabel>
                            </TableCell>
                            <TableCell className="tableHeaderCell">
                                <TableSortLabel>Time at</TableSortLabel>
                            </TableCell>
                            <TableCell className="tableHeaderCell">
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data.articles &&
                            data.articles.map((article) => (
                                <TableRow key={article.id}>
                                    <TableCell size="small">
                                        {article.title}
                                    </TableCell>
                                    <TableCell size="small">
                                        {article.description}$
                                    </TableCell>
                                    <TableCell size="small">
                                        {Date(article.createdAt)}
                                    </TableCell>
                                    <TableCell size="small">
                                        <IconButton
                                            className="view-button"
                                            onClick={() =>
                                                viewDetail(article.id)
                                            }
                                        >
                                            <FindInPageOutlined />
                                        </IconButton>
                                        <IconButton
                                            className="edit-button"
                                            // onClick={(event) => handleOpen(event, article)}
                                        >
                                            <EditOutlined />
                                        </IconButton>
                                        <IconButton
                                            className="delete-button"
                                            // onClick={() => deletearticle(article)}
                                        >
                                            <DeleteForeverOutlined />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
