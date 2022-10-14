import push_swap from '../images/push_swap.gif';
import './Projects.css';

export default function Projects() {
	// try to programatically create an array with the details each project and create a Project component in order to store the array data in HTML blabla
	return (
		<div className="projects">
			<div className="project">
				<h3 className="project__title">Push_Swap</h3>
				<div className="project__card">
					<p className="project__description">
						The goal of this project is to sort a list of numbers using two stacks and a limited set of instructions. 
						The program must display the instructions used to sort the list. 
						The program must also display the number of instructions used to sort the list.
					</p>
					<img className="project__img" src={push_swap} alt="push_swap"/>
				</div>
				<a href="https://github.com/VladDrag/42_WB_2021_Push_Swap" className="project__link">View project</a>
			</div>
			<div className="projects">
				<div className="project">
					<h3 className="project__title">Test_second</h3>
					<div className="project__card">
						<p className="project__description">
							Description Test
						</p>
						<img className="project__img" src={push_swap} alt="push_swap"/>
					</div>
					<a href="" className="project__link"/>
				</div>
			</div>
		</div>
	);
}