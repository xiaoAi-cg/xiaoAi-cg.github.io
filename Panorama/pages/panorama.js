var container;

var controls;
var camera, scene, renderer;

var mouseX = 0,
	mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var object;


function init() {

	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
	camera.position.z = 1;

	// scene

	scene = new THREE.Scene();

	var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
	//scene.add(ambientLight);

	var pointLight = new THREE.PointLight(0xffffff, 0.8);
	camera.add(pointLight);
	scene.add(camera);
	
	var material;

	// manager

	function loadModel() {

		object.traverse(function(child) {

			if (child.isMesh) child.material = material;

		});
		scene.add(object);

	}

	var manager = new THREE.LoadingManager(loadModel);

	manager.onProgress = function(item, loaded, total) {

		console.log(item, loaded, total);

	};

	// texture

	var textureLoader = new THREE.TextureLoader(manager);

	textureLoader.load('../resources/textures/result40Red-Cyan.jpg',function(texture){
		material = new THREE.MeshBasicMaterial({map: texture});
	});

	// model

	function onProgress(xhr) {

		if (xhr.lengthComputable) {

			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

		}

	}

	function onError() {}

	var loader = new THREE.OBJLoader(manager);

	loader.load('../resources/models/cylinder.obj', function(obj) {

		object = obj;

	}, onProgress, onError);

	//

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	//

	window.addEventListener('resize', onWindowResize, false);
	
	controls = new THREE.TrackballControls( camera, renderer.domElement );


}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
	controls.handleResize();

}

//

function animate() {

	requestAnimationFrame(animate);
	render();
	
	controls.update();

}

function render() {
	renderer.render(scene, camera);
}
