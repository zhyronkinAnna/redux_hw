import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import PostAddForm from './PostAddForm';

const PostAdd = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
     setIsModalOpen(true);
   };
   const handleOk = () => {
     setIsModalOpen(false);
   };
   const handleCancel = () => {
     setIsModalOpen(false);
   };
   return (
     <>
       <Button type="primary" onClick={showModal}>
         Create Post
       </Button>
       <Modal
         title="Basic Modal"
         open={isModalOpen}
         onOk={handleOk}
         onCancel={handleCancel}
       >
         <PostAddForm />
       </Modal>
     </>
   );
}

export default PostAdd;
