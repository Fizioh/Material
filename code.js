//Définition des alias - Elements de base

var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Composite = Matter.Composite,
Composites = Matter.Composites,
Common = Matter.Common,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Bodies = Matter.Bodies,
World = Matter.World;

//Création de engine et renderer

var engine = Engine.create(),
world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1500,
        height: 850,
        showAngleIndicator: true,
    }
});
Render.run(render);

// création runner

var runner = Runner.create();
Runner.run(runner,engine);

//ajout bodies

var stack = Composites.stack(20, 20, 20, 5, 0, 0, function (x, y) {
    return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
});

World.add (world, stack);
World.add(world, [
    Bodies.rectangle(250, 150, 700, 5, { isStatic: true, angle: Math.PI * 0.06, render: {visible: true} }),
    Bodies.rectangle(500, 300, 700, 10, {isStatic: true, angle: -Math.PI * 0.03, render: { visible: true} }),
    Bodies.rectangle(340, 500, 700, 10, {isStatic: true, angle: Math.PI * 0.05, render: { visible: true} })
]);


Render.lookAt ( render, Composite, allBodies(world));
