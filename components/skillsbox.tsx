import React, { useEffect, useRef } from 'react';
import Matter,{
  Engine,
  Render,
  Runner,
  Bodies,
  World,
  Mouse,
  Vector,
  MouseConstraint,
  Events,
  Constraint,
} from 'matter-js';
import Image from 'next/image';
import {FaBeer, FaReact,FaAmazon} from 'react-icons/fa'
import {SiReact,SiNextdotjs,SiTypescript} from 'react-icons/si'
import head from '../public/images/head.png'



const PhysicsComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      element: canvasRef.current,
      engine,
      options: {
        width: 800,
        height: 600,
      },
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);

    // Create and add balls to the Matter.js world
    const bodies = [
      ...[...document.querySelectorAll("svg path")].map(path => {
        const body = Matter.Bodies.fromVertices(
          100, 80, Matter.Svg.pathToVertices(path), {}, true
        );
        Matter.Body.scale(body, 0.2, 0.2);
        return body;
      })
    ];
    
    Matter.Composite.add(engine.world, bodies);
    // Load the SVG path data and convert it to polygons


    // Create boundaries to keep balls and the custom SVG body within the canvas
    const bounds = [
      Bodies.rectangle(400, 0, 800, 5, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 5, { isStatic: true }),
      Bodies.rectangle(0, 300, 5, 600, { isStatic: true }),
      Bodies.rectangle(800, 300, 5, 600, { isStatic: true }),
    ];

    World.add(engine.world, [ ...bounds]);

    const runner = Runner.create();


    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  return <div ref={canvasRef}><script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
   <script src="pathseg.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.js"></script><FaReact size={46}/></div>;
};

export default PhysicsComponent;