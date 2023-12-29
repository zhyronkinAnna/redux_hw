import React, { Children, useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Button, Divider, Modal} from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginModal = () => {
    const [btnLabel, setBtnLabel] = useState("Register");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentForm, setCurrentForm] = useState(<LoginForm/>);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleFooterClick = () => {
        btnLabel === "Register" ? setBtnLabel("Login") : setBtnLabel("Register");
    };

    useEffect(() => {
        btnLabel === "Register"? setCurrentForm(<LoginForm/>): setCurrentForm(<RegisterForm/>);
    }, [btnLabel]);

    return (
        <>
            <Button type="primary" onClick={showModal}>
                <AccountCircleIcon fontSize="medium"/>
            </Button>
            <Modal 
                   open={isModalOpen} 
                   onOk={handleOk} 
                   onCancel={handleCancel}
                   footer={[
                   <Button onClick={handleFooterClick}>{btnLabel}</Button>
                   ]}>

                {currentForm}                
            </Modal>
        </>
    );
}

export default LoginModal;
