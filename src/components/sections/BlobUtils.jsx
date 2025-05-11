import React, { useEffect, useRef } from 'react';

const BlobUtils = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    const interactiveElements = document.querySelectorAll('.interactive');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOut = (e) => {
      if (!e.relatedTarget) {
        cursorElement.style.opacity = '0';
      }
    };

    const onMouseOver = () => {
      cursorElement.style.opacity = '1';
    };

    const animateCursor = () => {
      const easing = isHovering ? 0.1 : 0.2;
      cursorX += (mouseX - cursorX) * easing;
      cursorY += (mouseY - cursorY) * easing;
      cursorElement.style.left = `${cursorX}px`;
      cursorElement.style.top = `${cursorY}px`;
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseover', onMouseOver);

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        isHovering = true;
        cursorElement.classList.add('hover');
      });

      element.addEventListener('mouseleave', () => {
        isHovering = false;
        cursorElement.classList.remove('hover');
      });

      element.addEventListener('mousemove', (e) => {
        if (isHovering) {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;
          mouseX = e.clientX - deltaX * 0.15;
          mouseY = e.clientY - deltaY * 0.15;
        }
      });
    });

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className="cursor-wrapper">
      <div className="cursor-element" ref={cursorRef}></div>
    </div>
  );
};

export default BlobUtils;
