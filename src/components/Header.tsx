"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

const products = [
  {
    name: "Book a stay",
    description: "Reserve your stay at our hotel",
    href: "#",
    icon: HomeIcon,
  },

  {
    name: "Book a Flight",
    description: "Reserve your flight",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our support Team",
    description: "Get in touch with our support team",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];
const callsToAction = [
  {
    name: "Watch demo booking",
    description: "Experience our booking process",
    href: "#",
    icon: PlayCircleIcon,
  },
  {
    name: "Contact support",
    description: "Get in touch with our support team",
    href: "#",
    icon: PhoneIcon,
  },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hotel Booking</span>
            <img className="h-12 w-auto" src="logo.png" alt="Hotel Booking" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white cursor-pointer">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94]"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94]"
                    >
                      <item.icon className="h-5 w-5 flex-none text-[#013B94]" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flights
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Car Rentals
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Attractions
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flight + Hotels
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py06 sm:max-w-sm sm:ring-gray-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1 mt-5 p-1 5">
              <span className="sr-only">Hotel Booking</span>
              <img className="h-8 w-auto" src="logo.png" alt="logo" />
            </a>
            <button
              className="-m-2 5 rounded-md p-2 mt-5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                        Stays
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180" : ""
                          } h-5 w-5 flex-none text-white`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item, index) => (
                          <Disclosure.Button
                            key={index}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flights
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Car Rentals
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Attractions
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flight + Hotel
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Header;
