import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

//assets
import Logo from "../assets/logo.png";
import Home from "../assets/home.png";
import Patients from "../assets/patients.png";
import Schedule from "../assets/schedule.png";
import Message from "../assets/messages.png";
import Transactions from "../assets/transactions.png";
import Avatar from "../assets/avatar.png";
import Settings from "../assets/setting.png";
import MenuDot from "../assets/menuDots.png";


const navigation = [
    { name: 'Overview', href: '#', icon: Home, current: false },
    { name: 'Patients', href: '#', icon: Patients, current: true },
    { name: 'Schedule', href: '#', icon: Schedule, current: false },
    { name: 'Message', href: '#', icon: Message, current: false },
    { name: 'Transactions', href: '#', icon: Transactions, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white m-4 rounded-full">
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    
                    <div className="flex items-center">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Logo"
                                src={Logo}
                                className="h-8 w-auto"
                            />
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                        <div className="hidden sm:block">
                            <div className="flex space-x-8">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'text-black bg-[#01F0D0]'
                                                : 'text-gray-700 hover:bg-[#01F0D0] hover:text-black',
                                            'flex items-center rounded-full px-4 py-3 text-sm font-medium transition duration-300 ease-in-out'
                                        )}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={`${item.name} Icon`}
                                            className="mr-2 h-5"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <img
                            alt="Avatar"
                            src={Avatar}
                            className="h-8 rounded-full"
                        />
                        <img
                            alt="Settings"
                            src={Settings}
                            className="h-6 cursor-pointer"
                        />
                        <img
                            alt="Menu Dots"
                            src={MenuDot}
                            className="h-6 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current
                                    ? 'bg-[#01F0D0] text-black'
                                    : 'text-gray-700 hover:bg-[#01F0D0] hover:text-black',
                                'block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
