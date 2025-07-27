import {
  motion,
  AnimatePresence,
  easeOut,
} from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

import { navItem } from "@/constant";

type MobileNavigationProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavigation = ({
  isOpen,
  setIsOpen,
}: MobileNavigationProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "100vh",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        delay: 0.2,
        opacity: { duration: 0.3, delay: 0.5 },
        height: { duration: 0.4, delay: 0.6 },
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-x-0 top-0 z-50 flex flex-col bg-white/80 backdrop-blur-lg overflow-hidden"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 left-4 p-2 text-gray-800 hover:text-gray-600"
            aria-label="Close navigation"
          >
            <IoCloseOutline className="size-6" />
          </button>

          <nav className="mt-24 pl-6 flex-1">
            <div>
              <ul className="flex flex-col gap-y-3">
                {navItem.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      className="text-3xl font-medium text-gray-400/70 tracking-wide"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="p-6"
          >
            <a
              href="/#contact"
              className="block w-full bg-[#7478F8] text-white text-center py-3 rounded-full text-lg tracking-wide font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
