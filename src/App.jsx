import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import Loading from './components/Loading';
import Search from './components/Search';
import Footer from './components/Footer';
import Modal from 'react-modal';
import AdSenseAd from './components/AdSenseAd';

Modal.setAppElement('#root');

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=41199691-2eb8f077fd1945bd3130c2086&q=${term}&image_type=photo&pretty=true`,
		)
			.then((res) => res.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.error(err));
	}, [term]);

	const openModal = (image) => {
		setSelectedImage(image);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setSelectedImage(null);
	};

	return (
		<div className='container mx-auto'>
			<Search searchText={(text) => setTerm(text)} />
			<AdSenseAd
				adClient='ca-pub-4884232232976809'
				adSlot='7370381956'
			/>
			{!isLoading && images.length === 0 && (
				<h1 className='text-6xl text-center mx-auto mt-32 text-red-600'>
					No Image with the search term found
				</h1>
			)}
			{!isLoading && images.length > 0 && (
				<AdSenseAd
					adClient='ca-pub-4884232232976809'
					adSlot='7370381956'
				/>
			)}

			{isLoading ? (
				<div className='flex items-center justify-center m-auto text-40'>
					<Loading />
				</div>
			) : (
				<div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
					{images.map((image, index) => (
						<React.Fragment key={image.id}>
							<ImageCard
								key={image.id}
								image={image}
								onClick={() => openModal(image)}
							/>
							{(index + 1) % 3 === 0 && (
								<AdSenseAd
									adClient='ca-pub-4884232232976809'
									adSlot='7370381956'
								/>
							)}
						</React.Fragment>
					))}
				</div>
			)}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Image Preview'
				className='fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50'
				overlayClassName='fixed inset-0 bg-black bg-opacity-50'>
				{selectedImage && (
					<div className='bg-white p-6 rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto'>
						<img
							src={selectedImage.largeImageURL}
							alt={selectedImage.tags}
							className='w-full rounded-lg'
						/>
						<a
							href={selectedImage.largeImageURL}
							download
							className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
							Download
						</a>
						<button
							onClick={closeModal}
							className='mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-4'>
							Close
						</button>
					</div>
				)}
			</Modal>
			<Footer />
		</div>
	);
}

export default App;
