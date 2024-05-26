import React from 'react';

const ImageCard = ({ image, onClick }) => {
	const tags = image.tags.split(',');
	return (
		<div
			className=' max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer'
			onClick={onClick}>
			<img
				src={image.webformatURL}
				alt=''
				className='w-full'
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-purple-500 text-xl mb-2 flex justify-between items-center'>
					Photo by {image.user}
					<img
						src={image.userImageURL}
						alt=''
						className=' h-12 w-12 rounded-full shadow-xl'
					/>
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className='px-6 py-4'>
				{tags.map((tags, index) => (
					<span
						key={index}
						className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#{tags}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
