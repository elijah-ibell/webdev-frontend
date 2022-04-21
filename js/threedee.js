let camera, scene, renderer;
let mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, (window.innerWidth - 80) / (window.innerHeight - 80), 1, 1000 );
    camera.position.z = 400;

    scene = new THREE.Scene();

    const texture = new THREE.TextureLoader().load( 'textures/crate.png' );

    const geometry = new THREE.BoxGeometry( 200, 200, 200 );
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.domElement.style.position = "fixed"
    // renderer.domElement.style.top = "40px"
    // renderer.domElement.style.left = "40px"
    renderer.setSize( window.innerWidth - 80, window.innerHeight - 80);
    document.body.appendChild( renderer.domElement );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = (window.innerWidth - 80) / (window.innerHeight - 80);
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth - 80, window.innerHeight - 80);

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );

}