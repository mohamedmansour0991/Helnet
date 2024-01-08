import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { t } from "i18next";
import { deletPost } from "../../../rtk/Api/Api";
import { useDispatch, useSelector } from "react-redux";
import ModalShare from "../createPost/ModalShare";
import { Video3, image, voice } from "../../../assets/images/icons";
import Modal from "../modal/Modal";
import EditPostsServices from "../../posts/EditPostsServices";

export default function Dropdown({
  buttonData = "open",
  post,
  labels = [],
  post_id,
  top,
  position,
  handleButtons = (label) => {
    console.log(label);
  },
}) {
  const [isArabic, setIsArabic] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsArabic(localStorage.getItem("i18nextLng") === "ar");
  }, [localStorage.getItem("i18nextLng")]);

  const handleButtonClick = (label) => {
    if (label == "Delete") {
      deletPost(token, post.id, dispatch, post);
    } else if (label == "Edit") {
      if (post?.price) {
        setIsOpenservicw(true);
      } else {
        setIsOpen(true);
        setIsFormOpen(true);
      }
    }
  };
  const [isOpenservicw, setIsOpenservicw] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setformType] = useState("service");
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className=" ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button as="button">{buttonData}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${
              isArabic ? "left-0" : "right-0"
            } ${top} ${position}`}
          >
            <div className="px-1 py-1 ">
              {labels &&
                labels.map((label, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          handleButtonClick(label);
                          handleButtons(label);
                        }}
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center text-center rounded-md px-3 py-2`}
                      >
                        {t(label)}
                      </button>
                    )}
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ModalShare
        isOpen={isOpen}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
        setIsFormOpen={setIsFormOpen}
        isFormOpen={isFormOpen}
        post={post}
        buttons={[
          { value: "Images", title: "Post Images", image: image },
          { value: "Video", title: "Post Video", image: Video3 },
          { value: "Record", title: "Post Record", image: voice },
        ]}
      />
      <Modal
        isOpen={isOpenservicw}
        closeModal={() => {
          setIsOpenservicw(false);
        }}
        width="max-w-xl w-full"
      >
        <EditPostsServices
          formType={formType}
          setIsOpenservicw={setIsOpenservicw}
          // setIsOpen={setIsOpen}
          setIsFormOpen={setIsFormOpen}
          post={post}
        />
      </Modal>
    </div>
  );
}
