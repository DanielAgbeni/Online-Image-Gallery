import React from 'react';

const Footer = () => {
	let currentYear = new Date().getFullYear();
	return (
		<div className=' h-10 bg-slate-100 rounded-xl w-full text-center shadow-xl py-2 mt-5 bottom-0'>
			<p>
				Photos provided by{' '}
				<span className=' underline text-green-500'>
					<a
						href='https://pixabay.com'
						target='_blank'
						rel='noopener noreferrer'>
						Pixabay
					</a>{' '}
				</span>{' '}
				built by{' '}
				<span className=' underline text-blue-500'>
					{' '}
					<a
						href='http://danielagbeni.netlify.app'
						target='_blank'
						rel='noopener noreferrer'>
						Daniel Agbeni
					</a>
				</span>
				,{' '}
				<span className=' underline'>
					<a
						href='https://github.com/DanielAgbeni/Online-Image-Gallery'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>
				</span>
				&copy; <span>{currentYear}</span>
			</p>
		</div>
	);
};

export default Footer;
