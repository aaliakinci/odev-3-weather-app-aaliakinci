import React from 'react';

function Loading() {
	return (
		<>
			<div class="text-center">
				<h3>Lütfen Bekleyin</h3>
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		</>
	);
}

export default Loading;
