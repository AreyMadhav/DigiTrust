// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create an array to hold cube objects
const cubes = [];
const numCubes = 8; // Number of cubes in the chain

// Create cubes and add them to the scene
for (let i = 0; i < numCubes; i++) {
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(i * 2, 0, 0);
  cubes.push(cube);
  scene.add(cube);
}

// Set camera position
camera.position.z = 10;

// Animation variables
let time = 0;
const radius = 3;

// Mouse variables
const mouse = new THREE.Vector2(0, 0);

// Add event listeners to track mouse movement
window.addEventListener('mousemove', (event) => {
  // Normalize mouse coordinates to [-1, 1]
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
});

// Animation loop
const animate = function () {
  requestAnimationFrame(animate);

  // Update cube positions and rotations based on mouse movement
  for (let i = 0; i < numCubes; i++) {
    const angle = (i / numCubes) * Math.PI * 2 + time * 0.2; // Angle based on time
    const x = radius * Math.cos(angle + mouse.x * 2); // Adjust position based on mouse.x
    const z = radius * Math.sin(angle + mouse.y * 2); // Adjust position based on mouse.y

    cubes[i].position.set(x, 0, z);
    cubes[i].rotation.x = angle + mouse.y * 2; // Rotate based on mouse.y
    cubes[i].rotation.y = angle + mouse.x * 2; // Rotate based on mouse.x
  }

  time += 0.02; // Adjust the speed of the animation
  renderer.render(scene, camera);
};

// Start animation loop
animate();
