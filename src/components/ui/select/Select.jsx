import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { arrowDown } from "../../../assets/images/icons";
import { t } from "i18next";

export default function Select({ selectLabels }) {
  const [selected, setSelected] = useState(selectLabels[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex gap-3 justify-between items-center px-2 py-0 bg-blue-50 rounded-xl max-w-28 w-fit max-h-8">
            <img src={arrowDown} alt="" />
            <span className="block truncate">{t(selected.name)}</span>
            <img src={selected.img} alt="" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {selectLabels.map((label, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none px-2 py-1 rounded-md ${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    }`
                  }
                  value={label}
                >
                  {({ selected }) => (
                    <p className="flex justify-between">
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {t(label.name)}
                      </span>
                      <img src={label.img} alt="" />
                    </p>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
