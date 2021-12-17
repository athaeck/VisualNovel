namespace Aurea_Novel {
  export async function Intro(): fS.SceneReturn {
    console.log("intro");
    await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await fS.Location.show(location.bedroom);
    // await fS.update(1);
  }
}