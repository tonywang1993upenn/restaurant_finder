"use client"
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { CustomFilterProps } from "@types";


function Myfilter({ title, options }: CustomFilterProps) {

    const [selected, setSelected] = useState(options[0]);

    return (
        // set a fiexd size box  
        <div className="relative w-fix">
            <Listbox
                value={selected}
                onChange={setSelected}>
                <div className="relative mt-1 ">
                    <Listbox.Button
                        className="my-filter__btn">
                        <span className="block">
                            {selected.title}</span>
                        <span className="ml-4 object-contain">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden='true' />
                        </span>

                    </Listbox.Button>

                    {/* list animation */}
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >

                        {/* options */}
                        <Listbox.Options 
                        
                        className="my-filter__options max-h-24 overflow-y-auto ">
                            {options.map((option) => (
                                <Listbox.Option
                                 key ={option.title}   className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-4
                                     ${active
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-900"
                                        }`
                                    }
                                    value={option.value}>
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                                                {option.title}
                                            </span>
                                        </>
                                    )}

                                </Listbox.Option>

                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox >
        </div >
    )
}

export default Myfilter
