import { useState } from 'react';
import { Modal } from '../components/modal';
import { LoginForm } from '../components/login-form';

export default function LoginSignup() {
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //const setModal = () => setIsModalOpen(!isModalOpen);
  //하나로 관리 가능함.

  //로그인 기능

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-semibold mb-4">로그인</h1>
      <LoginForm />
      <button
        className="bg-gray-200 text-black font-bold w-64 p-2 rounded mt-4"
        onClick={openModal}
      >
        회원가입
      </button>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}
