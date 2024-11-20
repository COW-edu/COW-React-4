import { useState } from 'react';
import SignUpModal from './SignupModal'; // 모달 컴포넌트 import

function SignupForm() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p className="text-gray-600 text-sm text-center mt-4">
        계정이 없으신가요?{' '}
        <a
          onClick={openModal}
          href="#"
          className="text-blue-500 hover:underline"
        >
          회원가입
        </a>
      </p>

      {isModalOpen && <SignUpModal closeModal={closeModal} />}
    </div>
  );
}

export default SignupForm;
