window.onload = function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setSize( window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement );

	scene.background = new THREE.Color( 0xffffff );

	var light = new THREE.DirectionalLight( 0xffffff );
	light.position = camera.position;
	scene.add(light);

	var ambient = new THREE.AmbientLight( 0xffffff);
	scene.add(ambient);



	var geometry = new THREE.PlaneGeometry( 3, 1.8, 16);
	//var Texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/yvital/Earth/master/img/earth.jpg');
	var Texture = new THREE.TextureLoader().load('/img/real-madrid.jpg');
	var material = new THREE.MeshBasicMaterial( {map: Texture, side: THREE.DoubleSide, transparent: true, opacity: 0.4 } );
	material.depthWrite = false;
	var group = new THREE.Group();

	for (var i=0; i< 18; i++)
	{
		var plane = new THREE.Mesh( geometry, material );
		plane.rotation.y = 20 * i * Math.PI / 180;
		group.add( plane );
	}

	scene.add( group );

	camera.position.z = 5;

	var animate = function () {
	requestAnimationFrame( animate );

		group.rotation.y += 0.04;
		renderer.render( scene, camera );
	};

	animate();

}	