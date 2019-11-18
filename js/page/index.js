var camera, scene, renderer;
var mesh;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 400;

	scene = new THREE.Scene();

	var texture = new THREE.TextureLoader().load('textures/20190304191549.jpg');

	var geometry = new THREE.BoxBufferGeometry(200, 200, 200);
	
	var material = new THREE.MeshBasicMaterial({
		map: texture
	});

	mesh = new THREE.Mesh(geometry, material);
	scene.add( mesh );

	var axesHelper = new THREE.AxesHelper(20);
	scene.add(axesHelper);

	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x888888,1.0);
	document.body.appendChild(renderer.domElement);
	
	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

	requestAnimationFrame(animate);

	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;

	renderer.render(scene, camera);

}
