import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import image from "../../assets/historyImages/little-planet.jpg";

const Image360 = () => {
  const canvasRef = useRef(null);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;

    // Создайте сцену
    const scene = new THREE.Scene();

    // Создайте камеру
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.rotation.y = Math.PI / 2;

    // Создайте рендерер
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Загрузите 360-градусное изображение
    const loader = new THREE.TextureLoader();
    const texture = loader.load(image);
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // Создайте сферу для отображения 360-градусного изображения
    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const sphere = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphere);

    // Добавьте обработчики событий для мыши
    const handleMouseDown = (event) => {
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      const { x, y } = previousMousePosition.current;
      const deltaX = event.clientX - x;
      const deltaY = event.clientY - y;
      rotation.current.x -= deltaY * 0.005; // Изменение знака для изменения направления по вертикали
      rotation.current.y -= deltaX * 0.005; // Изменение знака для изменения направления по горизонтали
      rotation.current.x = Math.max(Math.min(rotation.current.x, Math.PI / 2), -Math.PI / 2); // Ограничение вертикального поворота
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };

    canvas.addEventListener("mousedown", handleMouseDown);

    // Определите функцию анимации
    const animate = () => {
      requestAnimationFrame(animate);

      // Вращайте сферу
      sphere.rotation.x = rotation.current.x;
      sphere.rotation.y = rotation.current.y;

      // Обновите рендерер
      renderer.render(scene, camera);
    };

    // Запустите анимацию
    animate();

    // Обработчик изменения размера окна
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Добавьте слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    return () => {
      // Удалите слушатель события изменения размера окна
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Image360;
