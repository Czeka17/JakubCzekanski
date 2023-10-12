import React, { useEffect, useRef } from 'react';
import {
  Engine,
  Render,
  Runner,
  Bodies,
  World,
  Mouse,
  MouseConstraint,
  Events,
  Constraint,
} from 'matter-js';
import {FaBeer} from 'react-icons/fa'
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
    const ball1 = Bodies.circle(100, 100, 20, { restitution: 0.8 });
    const ball2 = Bodies.circle(200, 200, 20, { restitution: 0.8 });
    
    

    // Create boundaries to keep balls within the canvas
    const bounds = [
      Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
      Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
      Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
    ];

    World.add(engine.world, [ball1, ball2, ...bounds]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  return <div ref={canvasRef} />;
};
export default PhysicsComponent;