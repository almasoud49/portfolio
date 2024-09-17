/* eslint-disable @typescript-eslint/no-explicit-any */
import { projectsData } from '@/data/projectsData';
import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';

async function ProjectSingle({ params }:any) {
	const projectId = parseInt(params.id);
	const project = projectsData.find((project) => project.id === projectId);

	if (!project) {
		
		return <p>Project not Found</p>;
	}

	return (
		<div className="container mx-auto">
			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{project.ProjectHeader.title}
				</p>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{Array.isArray(project.ProjectHeader.tags)
								? project.ProjectHeader.tags.join(', ')  
								: project.ProjectHeader.tags}            
						</span>
					</div>
				</div>
			</div>

			{/* Gallery */}
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{project.ProjectImages.map((projectImage) => (
					<div className="mb-10 sm:mb-0" key={projectImage.id}>
						<Image
							src={projectImage.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={projectImage.title}
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
				))}
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project overview */}
					
          <div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{project.ProjectInfo.ProjectHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.ProjectInfo.ProjectOverview}
						</p>
					</div>

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.ProjectInfo.Technologies[0].techs.join(', ')}
						</p>
					</div>
				
				</div>

				{/* Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{project.ProjectInfo.ProjectDetails.map((details) => (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
// Generate static paths for dynamic routes
export async function generateStaticParams() {
	return projectsData.map((project) => ({
		id: project.id.toString(),
	}));
}

export default ProjectSingle;
