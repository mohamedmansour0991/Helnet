import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { close, close1 } from "../../../assets/images/icons";

export default function Modal({
  isOpen = () => {},
  closeModal = () => {},
  backFunc = () => {
    closeModal();
  },
  title = "",
  children = "placeholder",
  childrenPadding = "p-6",
  width = "w-full",
  height = "h-[100dvh] sm:h-auto",
  isFullScreen = true,
  hasCloseButton = false,
  closeButtonLeft = false,
}) {
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    setIsArabic(localStorage.getItem("i18nextLng") === "ar");
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 p-3" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center sm:p-4 text-center p-2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`${width} ${height} p-3 transform overflow-hidden sm:rounded-3xl bg-white text-start align-middle shadow-xl transition-all ${
                  isFullScreen ? "max-w-4xl" : "max-w-md"
                }`}
              >
                <div className={`${isArabic ? "text-right" : "text-left"}`}>
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}

                  {hasCloseButton && (
                    <button
                      className={`absolute z-20 top-1 ${
                        closeButtonLeft ? "left-5" : "right-5"
                      }`}
                      onClick={closeModal}
                    >
                      <img src={close1} alt="" />
                    </button>
                  )}

                  <div
                    className={`overflow-y-scroll sm:max-h-[70dvh] max-h-[100dvh] no-scrollbar ${childrenPadding}`}
                  >
                    {children}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
