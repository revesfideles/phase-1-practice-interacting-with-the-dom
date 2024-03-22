document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('counter');
    let timerValue = 0;

    setInterval(() => {
        timerValue++;
        timerElement.textContent = timerValue;
    }, 1000);

    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');

    plusButton.addEventListener('click', () => {
        timerValue++;
        timerElement.textContent = timerValue;
    });

    minusButton.addEventListener('click', () => {
        if (timerValue > 0) {
            timerValue--;
            timerElement.textContent = timerValue;
        }
    });

    heartButton.addEventListener('click', () => {
        if (!likes[timerValue]) {
            likes[timerValue] = 1;
        } else {
            likes[timerValue]++;
        }

        const likeItem = document.createElement('li');
        likeItem.textContent = `${timerValue} has been liked ${likes[timerValue]} times`;
        likesList.appendChild(likeItem);
    });

    pauseButton.addEventListener('click', () => {
        isPaused = !isPaused; // Toggle the value of isPaused
    
        if (isPaused) {
          pauseButton.textContent = 'resume';
          plusButton.disabled = true;
          minusButton.disabled = true;
          heartButton.disabled = true;
        } else {
          pauseButton.textContent = 'pause';
          plusButton.disabled = false;
          minusButton.disabled = false;
          heartButton.disabled = false;
        }
      });
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
    
        const commentText = commentInput.value;
        commentInput.value = ''; // Clear the input field
    
        if (commentText) {
          const commentItem = document.createElement('li');
          commentItem.textContent = commentText;
          commentList.appendChild(commentItem);
        }
      });
    });