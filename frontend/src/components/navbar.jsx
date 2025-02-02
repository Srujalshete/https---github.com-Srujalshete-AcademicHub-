import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Campus Map', description: 'Get a better understanding of your traffic', href: '/campus ', icon: ChartPieIcon },
  { name: 'Virtual Tour', description: 'Speak directly to our Representative', href: '/tour', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your child will be safe and secure', href: '/beam', icon: FingerPrintIcon },
  { name: 'Facilities Overview', description: 'Live amazing school life', href: '/facility', icon: SquaresPlusIcon },
  { name: 'Transportation', description: 'Build strategic funnels that will convert', href: '/transport', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact us', href: '/contact', icon: PhoneIcon },
];

 

const marketplaceProducts = [
  { name: 'Boarding Facilities', description: 'Discover our boarding amenities', href: '#', icon: ChartPieIcon },
  { name: 'Residential Life', description: 'Explore residential life at our school', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Daily Schedule', description: 'View our daily school schedule', href: '/schedule', icon: FingerPrintIcon },
  { name: 'Boarding Admission', description: 'Information on boarding admissions', href: '/hosteladm', icon: SquaresPlusIcon },
  { name: 'Parent Resources', description: 'Resources for parents', href: '#', icon: ArrowPathIcon },
];

const companyProducts = [
  { name: 'Extracurricular Activities', description: 'Explore our extracurricular offerings', href: '#', icon: ChartPieIcon },
  { name: 'Sports Programs', description: 'Learn about our sports programs', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Community Service', description: 'Information about community service', href: '/leadership', icon: FingerPrintIcon },
  { name: 'Career Counseling', description: 'Guidance on career planning', href: '/career', icon: SquaresPlusIcon },
  { name: 'Alumni Network', description: 'Connect with our alumni community', href: '/alumini', icon: ArrowPathIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/layout" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500" alt="" />
          </a>
        </div>
        <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
          About
        </a>
        <div className="hidden lg:flex lg:w-16"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Campus
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

         

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Boarding
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                  {marketplaceProducts.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Beyond Academics
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                  {companyProducts.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
  <div className="fixed inset-0 z-10" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      {/* Company logo */}
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
      {/* Close button */}
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
                       Campus
                       <ChevronDownIcon
                         className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                         aria-hidden="true"
                       />
                     </Disclosure.Button>
                     <Disclosure.Panel className="mt-2 space-y-2">
                       {[...products, ...callsToAction].map((item) => (
                         <a
                           key={item.name}
                           href={item.href}
                           className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                         >
                           {item.name}
                         </a>
                       ))}
                     </Disclosure.Panel>
                   </>
                 )}
               </Disclosure>

                {/* Curriculum */}
<Disclosure as="div" className="-mx-3">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
        Curriculum
        <ChevronDownIcon
          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
          aria-hidden="true"
        />
      </Disclosure.Button>
      <Disclosure.Panel className="mt-2 space-y-2">
        {curriculumProducts.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </a>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

{/* Marketplace */}
<Disclosure as="div" className="-mx-3">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
      Boarding
        <ChevronDownIcon
          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
          aria-hidden="true"
        />
      </Disclosure.Button>
      <Disclosure.Panel className="mt-2 space-y-2">
        {marketplaceProducts.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </a>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

{/* Company */}
<Disclosure as="div" className="-mx-3">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
      Beyond Academics
        <ChevronDownIcon
          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
          aria-hidden="true"
        />
      </Disclosure.Button>
      <Disclosure.Panel className="mt-2 space-y-2">
        {companyProducts.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </a>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

             </div>
             <div className="py-6">
               <a
                 href="/login"
                 className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
               >
                 Log in
               </a>
             </div>
           </div>
         </div>
       </Dialog.Panel>
     </Dialog>
     <div className="w-full bg-yellow-500 text-white text-center py-2 font-bold">
          <p className="whitespace-nowrap overflow-hidden overflow-x-auto">
            <span className="inline-block animate-marquee">This project is still in development phase. Stay tuned for updates!</span>
          </p>
        </div>  
   </header>
 );
}

