/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProjectSingle = (props: any) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <Link
          href={`/projects/${props.id}`}
          aria-label="Single Project"
          passHref
        >
          <div>
            <Image
              src={props.img}
              className="rounded-t-xl border-none"
              alt="Single Project"
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
        </Link>

        <div className="text-center px-4 py-6">
          <Link
            href={`/projects/${props.id}`}
            aria-label="Single Project Title"
            passHref
          >
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {props.title}
            </p>
          </Link>

          <p className="text-gray-600 dark:text-gray-400 text-left mb-4">
            {props.description}
          </p>

          <div className="flex items-center justify-center mt-4">
            {props?.LiveLink && (
              <a
                href={props.LiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mr-2"
                onClick={handleLinkClick}
              >
                Live Link
              </a>
            )}

            <span className="text-gray-500 mx-2"> | GitHub: </span>

            {props?.GitHub?.Client && (
              <a
                href={props.GitHub.Client}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mr-2"
                onClick={handleLinkClick}
              >
                Client
              </a>
            )}

            <span className="text-gray-500 mx-2">|</span>

            {props?.GitHub?.Server && (
              <a
                href={props.GitHub.Server}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
                onClick={handleLinkClick}
              >
                Server
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;


