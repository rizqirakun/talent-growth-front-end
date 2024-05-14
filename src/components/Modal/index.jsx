import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getSize = {
  xs: 'sm:max-w-md',
  sm: 'sm:max-w-lg',
  md: 'sm:max-w-xl',
  lg: 'sm:max-w-2xl',
  xl: 'sm:max-w-3xl',
  '2xl': 'sm:max-w-4xl',
  '3xl': 'sm:max-w-5xl'
};

const MODAL_SIZE = Object.keys(getSize);
export default function Modal({
  open = false,
  setOpen,
  children,
  initRef,
  backdrop = false,
  disableOutsideClose = false,
  overflow = false,
  size = 'sm',
  modalClassName = ''
}) {
  function closeModal() {
    setOpen(disableOutsideClose);
  }

  return (
    <Transition.Root
      appear
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-[60]"
        initialFocus={initRef}
        onClose={closeModal}
      >
        {backdrop ? (
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-gray-700/75"
              aria-hidden="true"
            />
          </Transition.Child>
        ) : (
          ''
        )}

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  'relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6',
                  overflow ? 'overflow-hidden' : '',
                  getSize[size],
                  modalClassName
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
  initRef: PropTypes.node,
  backdrop: PropTypes.bool,
  disableOutsideClose: PropTypes.bool,
  overflow: PropTypes.bool,
  size: PropTypes.oneOf(MODAL_SIZE),
  modalClassName: PropTypes.string
};
