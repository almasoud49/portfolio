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
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
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
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<p className="text-gray-600 dark:text-gray-400 text-left mb-4">
							{props.description}
						</p>
						<div className="flex items-center justify-center mt-4">
							{props?.LiveLink ? (
								<Link href={props.LiveLink}  passHref>
									<span className="text-blue-500 hover:text-blue-700 mr-2" target="_blank" rel="noopener noreferrer">
										Live Link
									</span>
								</Link>
							) : null}
							<span className="text-gray-500 mx-2"> |  Github: </span>
							{props?.GitHub?.Client ? (
								<Link href={props.GitHub.Client} passHref>
									<span className="text-blue-500 hover:text-blue-700 mr-2" target="_blank" rel="noopener noreferrer">
										Client
									</span>
								</Link>
							) : null}
							<span className="text-gray-500 mx-2">|</span>
							{props?.GitHub?.Server ? (
								<Link href={props.GitHub.Server} passHref>
									<span className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
										Server
									</span>
								</Link>
							) : null}
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
