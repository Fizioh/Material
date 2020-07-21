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
 //passer en flase pour ne plus voir les pentes rectangles
 //passer isStatic en flase pour qu'elles tombent aussi
World.add (world, stack);
World.add(world, [
    Bodies.rectangle(250, 150, 700, 5, { isStatic: true, angle: Math.PI * 0.06, render: {visible: true} }),
    Bodies.rectangle(500, 300, 700, 10, {isStatic: true, angle: -Math.PI * 0.03, render: { visible: true} }),
    Bodies.rectangle(340, 500, 700, 10, {isStatic: true, angle: Math.PI * 0.05, render: { visible: true} })
]);

World.add(world, [
    Bodies.rectangle(400, 600, 1200, 10.5, { isStatic: true})
]);

var stack = Composites.stack(100, 0, 10, 8, 10, 10, function(x, y) {
    return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1 });
});

World.add(world, [
    stack,
    Bodies.polygon(200, 460, 3, 60),
    Bodies.polygon(400, 460, 5, 60),
    Bodies.rectangle(600, 460, 80, 80)
]);

var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 02,
        render: {
            visible: false
        }
    }
});

render.mouse = mouse;

Render.lookAt ( render, Composite, allBodies(world));
