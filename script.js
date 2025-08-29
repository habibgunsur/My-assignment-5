
  //heart count
  let loveCount = 0;
  const heartSpan = document.querySelector('.header-right .icon-container:first-child span');

  //click
  document.querySelectorAll('.fav').forEach(btn => {
    btn.addEventListener('click', () => {
      loveCount++;
      heartSpan.textContent = loveCount;
    });
  });

  //history 
  const historyDiv = document.querySelector('.history');
  const clearBtn = document.querySelector('.history .clear');

  document.querySelectorAll('.card .call').forEach(btn => {
    btn.addEventListener('click', (event) => {
      const cardName = event.target.closest('.card').querySelector('.service-name').textContent;

      //history showing
      const historyItem = document.createElement('div');
      historyItem.classList.add('history-item');
      historyItem.textContent = `${cardName} - CALL`;
      
      historyDiv.appendChild(historyItem);
    });
  });

  //clear 
  clearBtn.addEventListener('click', () => {
    historyDiv.querySelectorAll('.history-item').forEach(item => item.remove());
  });
