
//=========================================================================================== model
loader = new THREE.LegacyJSONLoader();
loader.load('https://raw.githubusercontent.com/baronwatts/models/master/igloo.js', function (geometry, materials) {
    var matt = new THREE.MeshPhongMaterial({
        vertexColors: THREE.FaceColors,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
        color: new THREE.Color('white'),
        specular: new THREE.Color('skyblue'),
        //specular: new THREE.Color('#333'),
        shininess: 50,
    });
    var wall = new THREE.Mesh(geometry, matt);
    wall.position.set(0, 0, 0);
    wall.rotateY(Math.PI);
    wall.scale.set(.1, .1, .1);
    scene.add(wall);
});






//=========================================================================================== full screen
var requestFullscreen = function (ele) {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
}
var exitFullscreen = function (ele) {
    if (ele.exitFullscreen) {
        ele.exitFullscreen();
    } else if (ele.webkitExitFullscreen) {
        ele.webkitExitFullscreen();
    } else if (ele.mozCancelFullScreen) {
        ele.mozCancelFullScreen();
    } else if (ele.msExitFullscreen) {
        ele.msExitFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
}


//=========================================================================================== add tweening
//https://greensock.com/forums/topic/16993-threejs-properties/
Object.defineProperties(THREE.Object3D.prototype, {
    x: {
        get: function () {
            return this.position.x;
        },
        set: function (v) {
            this.position.x = v;
        }
    },
    y: {
        get: function () {
            return this.position.y;
        },
        set: function (v) {
            this.position.y = v;
        }
    },
    z: {
        get: function () {
            return this.position.z;
        },
        set: function (v) {
            this.position.z = v;
        }
    },
    rotationZ: {
        get: function () {
            return this.rotation.x;
        },
        set: function (v) {
            this.rotation.x = v;
        }
    },
    rotationY: {
        get: function () {
            return this.rotation.y;
        },
        set: function (v) {
            this.rotation.y = v;
        }
    },
    rotationX: {
        get: function () {
            return this.rotation.z;
        },
        set: function (v) {
            this.rotation.z = v;
        }
    }
});





//=========================================================================================== add Animation
let angle = 0,
    lastTime = null,
    u_frame = 0,
    clock = new THREE.Clock(),
    count = 0,
    prevTime = Date.now(),
    phase = 0;


function moveCharacter() {
    characterGroup.position.x < -85 ? (characterGroup.position.x = 85) : (characterGroup.position.x -= .15);
}

function moveLights() {
    phase += 0.03;
    sphereLightMesh.position.z = 5 - Math.cos(phase) * 5;
    sphereLightMesh.position.x = Math.sin(phase) * 5;
    pointLight3.position.copy(sphereLightMesh.position);

}



//===================================================== mouse
var mouseX = 0;
var mouseY = 0;
var zoomIn = 20;
document.addEventListener('mousemove', onDocumentMouseMove, false);
function onDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / zoomIn;
    mouseY = (event.clientY - window.innerHeight / 2) / zoomIn;
}


(function animate() {
    //update models
    const delta = clock.getDelta();
    mixers.forEach((mixer) => { mixer.update(delta * 1.25); });
    moveCharacter();
    moveLights();



    //VR Mode
    if (VR) {
        effect.render(scene, camera);
        controls.update();
        document.querySelector('.btn-group').classList.add('hide');
    } else {
        renderer.render(scene, camera);
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.lookAt(scene.position);
        document.querySelector('.btn-group').classList.remove('hide');
    }

    requestAnimationFrame(animate);

})();



//set camera position
camera.position.y = 3;
camera.position.z = -25;
camera.position.x = 50;