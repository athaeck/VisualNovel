namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("AUREA_NOVEL starting");
  export let transition = {
    clock: {
      duration:1,
      alpha:"../Images/Transitions/puzzle.png",
      edge:1
    }
  }

  export let sound ={
    // Music
    backgroundTheme: "",

    // Sound
    click:""

  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}