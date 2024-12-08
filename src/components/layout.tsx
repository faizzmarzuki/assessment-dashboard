import { Menu } from "../const/icons"
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex items-center justify-between w-full h-16 px-5 bg-white border-b">
        <Menu className="block md:hidden" onClick={toggleModal} />
        <img src="/src/assets/JurisTech_Logo_main.svg" alt="Logo" className="h-8" />
      </div>
      <div className="flex h-full">
        <div className="flex-col justify-between hidden w-48 px-5 pt-4 pb-20 bg-white border-r md:flex">
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-red-600">Dashboard</div>
          </div>
          <div>
            <span>Mohammad Faiz</span>
          </div>
        </div>
        <div className="w-full h-screen p-5 overflow-y-auto">{children}</div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-start bg-black bg-opacity-50"
          onClick={() => setModalOpen(false)}>
          <div
            className="flex flex-col justify-between w-48 px-5 pt-4 pb-20 bg-white"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-red-600">Dashboard</div>
            </div>
            <div>
              <span>Mohammad Faiz</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
