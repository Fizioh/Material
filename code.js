//Définition des alias - Elements de base

var Engine = Matter.Engine,
Render = Matter.render,
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
    element = document.body,
    engine = engine,
    options = {
        width: 1500,
        height: 850,
        showAngleIndicator: true,
    }
});
Render.run(render);
Render.lookAt(render);

