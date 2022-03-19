import React, { useState, useRef, useContext } from 'react';
import { CreateArticle } from '../components/ManagePage/CreateArticle';
import { useDispatch } from 'react-redux';
import { addNewArticle } from '../redux/Shopping/shopping-actions';
import { AuthContext } from '../context/auth';
export const AddArticle = () => {
    const dispatch = useDispatch();
    const { success } = useContext(AuthContext);
    const snackbarRef = useRef(null);
    const [editorValue, setEditorValue] = useState('');
    const [transition, setTransition] = useState(undefined);
    const [newArticle, setNewArticle] = useState({
        title: '',
        description: '',
        image: '',
    });

    newArticle.content = editorValue;

    const handleChangeEditor = (content) => {
        setEditorValue(content);
    };
    const onChangeInput = (event) => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value,
        });
    };
    const onAddArticle = (event, Transition) => {
        event.preventDefault();
        dispatch(addNewArticle(newArticle));
        setNewArticle({
            description: '',
            title: '',
            image: '',
            content: '',
        });
        setTransition(() => Transition);
        setEditorValue('');
    };

    return (
        <div>
            <CreateArticle
                onChangeInput={onChangeInput}
                handleChangeEditor={handleChangeEditor}
                onAddArticle={onAddArticle}
                newArticle={newArticle}
                snackRef={snackbarRef}
                transition={transition}
                success={success}
                editorValue={editorValue}
            />
        </div>
    );
};
