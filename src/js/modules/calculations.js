export const calculateOffscreenPositionY = (direction, elem) => {
    const screenHeight = window.innerHeight;
    const elemHeight = elem.offsetHeight;
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = screenHeight - (elemTop + elemHeight);

    let distance;
    if (direction === 'top') {
        distance = elemHeight + elemTop;
        
    } else if (direction === 'bottom') {
        distance = elemHeight + elemBottom;
    }

    return distance;
}

export const calculateOffscreenPositionX = (direction, elem) => {
    // Получаем ширину экрана
    const screenWidth = window.innerWidth;
    // Получаем ширину элемента
    const elemWidth = elem.offsetWidth;
    // Получаем расстояние от левой границы элемента до левой границы экрана
    const elemLeft = elem.getBoundingClientRect().left;
    // Получаем расстояние от правой границы элемента до правой границы экрана
    const elemRight = screenWidth - (elemLeft + elemWidth);
  
    let distance;
    if (direction === 'left') {
      // Если элемент должен быть перемещен влево, вычисляем расстояние как сумму ширины элемента и расстояния от левой границы элемента до левой границы экрана
      distance = elemWidth + elemLeft;
    } else if (direction === 'right') {
      // Если элемент должен быть перемещен вправо, вычисляем расстояние как сумму ширины элемента и расстояния от правой границы элемента до правой границы экрана
      distance = elemWidth + elemRight;
    }
  
    return distance;
  }
  
