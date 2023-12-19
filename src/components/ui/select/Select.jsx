import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { arrowDown } from "../../../assets/images/icons";
import { t } from "i18next";
import { publicIcon } from "../../../assets/images/icons";

export default function Select({
  className = "",
  selectLabels,
  hasIndictor,
  withImage = false,
  selectName = "",
}) {
  const [selected, setSelected] = useState(selectLabels[0]);

  return (
    <div className="grid gap-1">
      <p>{selectName}</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className={className}>
            {hasIndictor && <img src={arrowDown} alt="" />}
            <span className="block truncate">{t(selected)}</span>
            {withImage && <img src={publicIcon} alt="" />}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-30 mt-1 w-full max-h-60 overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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
                    <p className="flex gap-4 justify-between">
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {t(label)}
                      </span>
                      {withImage && <img src={publicIcon} alt="" />}
                    </p>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
