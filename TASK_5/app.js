const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const result = document.querySelector('#result span');

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', () => {
		let count = 0;
		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				count++;
			}
		});
		result.textContent = count;
	});
});