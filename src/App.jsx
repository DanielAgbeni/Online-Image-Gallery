import { useEffect } from 'react';
import { useState } from 'react';
import ImageCard from './components/ImageCard';
import Loading from './components/Loading';
import Search from './components/Search';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');
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
	return (
		<div className='container mx-auto'>
			<Search searchText={(text) => setTerm(text)} />
			{isLoading ? (
				<div className=' flex items-center justify-center m-auto text-40'>
					{' '}
					<Loading />
				</div>
			) : (
				<div className='grid grid-cols-3 gap-4'>
					{images.map((image) => (
						<ImageCard
							key={image.id}
							image={image}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
