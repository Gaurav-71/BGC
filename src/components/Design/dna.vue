<template>
  <div class="dna1" id="dna">
    <div class="dna-overlay">
      <div class="bgrnd">
        <div class="dna-title">Bengaluru Genomics Center</div>
        <span class="dna-subtitle">- Decode your Heredity -</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import DNA from "../../components/Animation/dna";
import gsap from "gsap";
// import { OrbitControls } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r109/examples/jsm/controls/OrbitControls.js';
const TWEEN = require("@tweenjs/tween.js");

export default {
  components: { DNA },
  mounted() {
    const container = document.getElementById("dna");
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    renderer.setClearColor("#000", 1);
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1528);

    // var ah = window.ah = new THREE.AxesHelper(1);
    // scene.add( ah );

    // const controls = new OrbitControls( camera, renderer.domElement );
    // controls.screenSpacePanning = true;

    camera.position.set(0, 0, 25);

    const target = new THREE.Vector3();

    // -----------------------------------------------------------------------

    // https://2pha.com/demos/threejs/shaders/2_color_fresnel.html

    var fresnelMat = new THREE.ShaderMaterial({
      uniforms: {
        color1: { type: "c", value: new THREE.Color(0xb4f1ff) }, // edge, light blue
        color2: { type: "c", value: new THREE.Color(0x122d98) }, // base, dark blue
        alpha: { type: "f", value: 0.75 },
        fresnelBias: { type: "f", value: 0.1 },
        fresnelScale: { type: "f", value: 1.0 },
        fresnelPower: { type: "f", value: 1.5 },
      },

      vertexShader: /* glsl */ `
    uniform float fresnelBias;
    uniform float fresnelScale;
    uniform float fresnelPower;

    varying float vReflectionFactor;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );

      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );

      vec3 I = worldPosition.xyz - cameraPosition;

      vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );

      gl_Position = projectionMatrix * mvPosition;
    }
  `,

      fragmentShader: /* glsl */ `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float alpha;

    varying float vReflectionFactor;

    void main() {
      gl_FragColor = vec4(mix(color2, color1, vec3(clamp( vReflectionFactor, 0.0, 1.0 ))), alpha);
    }
  `,
      // wireframe: true,
      transparent: true,
    });

    var fresnelMat2 = fresnelMat.clone();
    fresnelMat2.uniforms.color1.value.setHex(0xf5cafe); // light pink
    fresnelMat2.uniforms.color2.value.setHex(0x9a13ae); // pink

    // -----------------------------------------------------

    // curve path for dna strand

    class SinCurve1 extends THREE.Curve {
      constructor(scale) {
        super(scale);
        this.scale = scale === undefined ? 1 : scale;
      }

      getPoint(t, target) {
        var ty = t * 10;
        var tx = Math.sin(2.5 * Math.PI * t);
        var tz = Math.cos(2.5 * Math.PI * t);

        var point = new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

        if (target) target.copy(point);

        return point;
      }
    }

    class SinCurve2 extends THREE.Curve {
      constructor(scale) {
        super(scale);
        this.scale = scale === undefined ? 1 : scale;
      }

      getPoint(t, target) {
        var ty = t * 10;
        var tx = Math.sin(2 * Math.PI * t);
        var tz = Math.cos(2 * Math.PI * t);

        var point = new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

        if (target) target.copy(point);

        return point;
      }
    }

    class SinCurve3 extends THREE.Curve {
      constructor(scale) {
        super(scale);
        this.scale = scale === undefined ? 1 : scale;
      }

      getPoint(t, target) {
        var ty = t * 15;
        var tx = -Math.sin(2.8 * Math.PI * t);
        var tz = -Math.cos(2.8 * Math.PI * t);
        // var tz = 0;

        var point = new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

        if (target) target.copy(point);

        return point;
      }
    }

    var curve1 = new SinCurve1(4.5);
    var curve2 = new SinCurve2(6);
    var curve3 = new SinCurve3(4);

    // visual for curve

    var points = curve1.getPoints(50);
    var geometryPoints = new THREE.BufferGeometry().setFromPoints(points);
    var lineMat = new THREE.LineBasicMaterial({ color: 0xcccccc });
    var line = new THREE.Line(geometryPoints, lineMat);

    // ------------------------------------------

    class DNA extends THREE.Group {
      constructor(curve, total) {
        super();

        var cylLength = 1.65;
        var cylGeo = new THREE.CylinderBufferGeometry(
          0.1,
          0.1,
          cylLength / 2,
          16,
          1,
          true
        );
        var cylinder = new THREE.Mesh(cylGeo, fresnelMat);
        cylinder.position.y = cylLength / 4;

        var cylinder2 = new THREE.Mesh(cylGeo, fresnelMat2);
        cylinder2.position.y = -cylLength / 4;

        var sphereGeo = new THREE.SphereBufferGeometry(0.3, 32, 32);
        var sphere = new THREE.Mesh(sphereGeo, fresnelMat);
        sphere.position.y = cylLength / 2 + 0.25;

        var sphere2 = new THREE.Mesh(sphereGeo, fresnelMat2);
        sphere2.position.y = -cylLength / 2 - 0.25;

        var barGroup = new THREE.Group();
        barGroup.add(cylinder);
        barGroup.add(cylinder2);
        barGroup.add(sphere);
        barGroup.add(sphere2);

        total = total || 80;

        for (var i = 1; i <= total; i++) {
          var bGroup = new THREE.Group();

          var bar = barGroup.clone();
          bar.rotation.z = Math.PI * (i / 10);
          bar.userData.startZ = bar.rotation.z;
          bGroup.add(bar);

          curve.getPoint(i / total, bGroup.position);

          var nextPoint = curve.getPoint((i + 1) / total);
          bGroup.lookAt(nextPoint);

          this.add(bGroup);
        }

        // this.add( new THREE.AxesHelper(1) );
      }

      update(playhead) {
        this.children.forEach((obj) => {
          if (obj.isGroup) {
            var bar = obj.children[0];
            bar.rotation.z = bar.userData.startZ - Math.PI * playhead;
          }
        });
      }
    }

    // -------------------

    var dna1 = (window.dna1 = new DNA(curve1, 95));
    scene.add(dna1);
    dna1.position.set(1, -21, 13);

    // visual for curve
    // dna1.add( line );

    var dna2 = new DNA(curve2, 100);
    scene.add(dna2);
    // dna2.rotation.y = - Math.PI / 2;
    dna2.position.set(10, -30, -4);

    var dna3 = new DNA(curve3, 100);
    scene.add(dna3);
    dna3.position.set(-10, -28, -4);
    // dna3.rotation.y = Math.PI / 2;
    // dna3.rotation.z = Math.PI / 12;
    // dna3.rotation.x = Math.PI / 12;

    // -----------------------------------------------------------------------
    // -----------------------------------------------------------------------

    // particles

    var ParticleShader = {
      uniforms: {
        color: { type: "v3", value: new THREE.Color(0x2a4a52) },
        texture: { type: "t", value: null },
        time: { type: "f", value: 0 },
        size: { type: "f", value: 50.0 },
      },

      vertexShader: /* glsl */ `
    uniform float time;
    uniform float size;
    attribute float alphaOffset;
    varying float vAlpha;
    uniform vec4 origin;

    void main() {

      vAlpha = 0.5 * ( 1.0 + sin( alphaOffset + time ) );
      // vAlpha = 1.0;

      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      float cameraDist = distance( mvPosition, origin );
      gl_PointSize = size / cameraDist;
      gl_Position = projectionMatrix * mvPosition;

    }
  `,

      fragmentShader: /* glsl */ `
    uniform float time;
    uniform vec3 color;

    varying float vAlpha;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);
      float alpha = smoothstep(0.5, 0.1, dist) * vAlpha;
      gl_FragColor = vec4( color, alpha );
    }
  `,
    };

    class Particles extends THREE.Group {
      constructor(options) {
        super();

        var color = (this.color = options.color || 0x333333);
        var size = (this.size = options.size || 0.4);

        var pointCount = (this.pointCount = options.pointCount || 40);
        var range = (this.range = options.range || new THREE.Vector3(2, 2, 2));

        //

        ParticleShader.uniforms.size.value = size;

        var pointsMat = new THREE.ShaderMaterial({
          uniforms: ParticleShader.uniforms,
          vertexShader: ParticleShader.vertexShader,
          fragmentShader: ParticleShader.fragmentShader,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
        });

        var pointsGeo = new THREE.BufferGeometry();

        var positions = new Float32Array(pointCount * 3);
        var alphas = new Float32Array(pointCount);

        for (var i = 0; i < pointCount; i++) {
          positions[i * 3 + 0] = THREE.Math.randFloatSpread(range.x);
          positions[i * 3 + 1] = THREE.Math.randFloatSpread(range.y);
          positions[i * 3 + 2] = THREE.Math.randFloatSpread(range.z);

          alphas[i] = i;
        }

        pointsGeo.addAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        pointsGeo.addAttribute(
          "alphaOffset",
          new THREE.BufferAttribute(alphas, 1)
        );

        var points = (this.points = new THREE.Points(pointsGeo, pointsMat));
        points.sortParticles = true;
        points.renderOrder = 1;

        this.add(points);

        var box = new THREE.Box3();
        box.setFromCenterAndSize(points.position, range);

        // var boxHelper = new THREE.Box3Helper( box );
        // this.add( boxHelper );
      }
    }

    // ---------------------------------

    var particles = new Particles({
      color: 0xffffff,
      range: new THREE.Vector3(50, 50, 50),
      pointCount: 200,
      size: 400,
      speed: 0.1,
    });

    scene.add(particles);

    //

    var timeline = {
      playhead: 0,
    };

    var tween1 = new TWEEN.Tween(timeline)
      .to({ playhead: 1 }, 1000 * 30)
      .easing(TWEEN.Easing.Linear.None)
      .repeat(Infinity)
      .start();

    // ---------------------------------------------------------------
    // ---------------------------------------------------------------

    window.addEventListener("resize", resize, false);
    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    renderer.setAnimationLoop(loop);

    function loop() {
      TWEEN.update();

      var playhead = timeline.playhead;

      dna1.update(playhead * 8);
      dna2.update(playhead * 8);
      dna3.update(playhead * 8);

      // controls.update();

      // update camera and target position

      camera.position.x = -Math.sin(2 * Math.PI * playhead) * 25;
      camera.position.z = Math.cos(2 * Math.PI * playhead) * 25;
      camera.position.y = Math.sin(2 * 2 * Math.PI * playhead) * 5;

      target.x = -Math.sin(2 * Math.PI * playhead) * 10;
      target.z = Math.cos(2 * Math.PI * playhead) * 10;

      camera.lookAt(target);

      //

      renderer.render(scene, camera);
    }

    const titles = gsap.timeline();
    titles.add();
    titles
      .from(".dna-title", 1, { opacity: 0, y: -100 })
      .from(".dna-subtitle", 1, { opacity: 0, y: 100 }, "-=1");
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.dna1 {
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @include responsive($tablet-portrait) {
    min-height: auto;
  }
  @include responsive($phone) {
    margin: 0;
    padding: 0;
    min-height: auto;
  }
  .dna-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    position: absolute;
    //background: red;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bgrnd {
      width: 100%;
      //background: red;
      text-align: center;
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      animation: custom-blur 1s ease-in 1;
      @include responsive($phone) {
        padding: 1rem;
      }
      .dna-title {
        margin: 0;
        padding: 0;
        margin-top: 0.5rem;
        text-align: center;
        font-size: 4rem;
        color: white;
        font-family: "Anton", sans-serif !important;
        letter-spacing: 1px;
        z-index: 2;
        @include responsive($phone) {
          //margin-top: 1.25rem;
          font-size: 2rem;
        }
        @include responsive($small-phone) {
          //margin-top: 1.25rem;
          font-size: 2rem;
        }
      }
      .dna-subtitle {
        padding: 0;
        margin: 0;
        text-align: center;
        color: $accent;
        font-size: 3rem;
        letter-spacing: 1.5px;
        font-weight: bold;
        font-family: "Rouge Script", cursive !important;
        z-index: 2;
        display: inline-block;
        @include responsive($phone) {
          font-size: x-large;
        }
      }
    }
  }
}

@keyframes custom-blur {
  0% {
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
  }
  25% {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  50% {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  75% {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
  100% {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}
</style>