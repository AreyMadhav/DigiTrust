// Smooth scroll effect for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const yOffset = -70; // Adjust this value to fine-tune scroll position
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    }
});

// Toggle mobile navigation menu
const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Set up Three.js scene for the background
const backgroundScene = new THREE.Scene();
const backgroundCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const backgroundRenderer = new THREE.WebGLRenderer();
backgroundRenderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('animation-container').appendChild(backgroundRenderer.domElement);

// Create a simple background
const backgroundGeometry = new THREE.PlaneGeometry(2, 2, 0);
const backgroundMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
backgroundScene.add(background);

// Set background camera position
backgroundCamera.position.z = 5;

// Animation loop for the background
const animateBackground = function () {
  requestAnimationFrame(animateBackground);

  // Rotate the background
  background.rotation.x += 0.005;
  background.rotation.y += 0.005;

  backgroundRenderer.render(backgroundScene, backgroundCamera);
};

// Start background animation loop
animateBackground();

// Set up Three.js scene for cubes (similar to your existing code)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('animation-container').appendChild(renderer.domElement);

// ... (Your existing cube animation code)

// Animation loop for cubes (similar to your existing code)
const animate = function () {
  requestAnimationFrame(animate);

  // ... (Your existing cube animation code)

  renderer.render(scene, camera);
};

// Start cube animation loop
animate();
