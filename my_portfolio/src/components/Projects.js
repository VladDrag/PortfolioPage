import push_swap from '../images/push_swap.gif';

export default function Projects() {
	return (
		<div className="projects">
			<>
				<h3>Push_Swap</h3>
				<p>
					The goal of this project is to sort a list of numbers using two stacks and a limited set of instructions. 
					The program must display the instructions used to sort the list. 
					The program must also display the number of instructions used to sort the list.
				</p>
				<button className="source-code-btn"/>
				<img src={push_swap} alt="push_swap" className="push_swap"/>
				
			</>
		</div>
	);
}