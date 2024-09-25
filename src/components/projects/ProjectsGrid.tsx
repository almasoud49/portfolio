/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState<string>(""); 
	const [selectProject, setSelectProject] = useState<string>(""); 

	// Filter projects by category if a category is selected
	const selectProjectsByCategory = selectProject
		? projectsData.filter((item) => {
				const category =
					item.category.charAt(0).toUpperCase() + item.category.slice(1);
				return category.includes(selectProject);
		  })
		: projectsData;

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects Portfolio
				</p>
			</div>


			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{selectProjectsByCategory.map((project: any, index: any) => (
					<ProjectSingle key={index} {...project} />
				))}
			</div>
		</section>
	);
}

export default ProjectsGrid;
