
const nameInput = document.getElementById('name');
const continueBtn = document.getElementById('continue');
const popup = document.getElementById('popup');

continueBtn.addEventListener('click', () => {
	const name = nameInput.value.trim();
	if (name === 'Sumit') {
		popup.classList.remove('hidden');
	}
});
