import React from 'react';

function Loading() {
	return (
		<>
			<div className="text-center">
				<h3>Lütfen Bekleyin</h3>
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</>
	);
}

export default Loading;
