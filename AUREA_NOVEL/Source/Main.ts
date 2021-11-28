namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("AUREA_NOVEL starting");
  export let transition = {
    clock: {
      duration:1,
      alpha:"./Images/Transitions/puzzle.png",
      edge:1
    }
  }

  export let sound ={
    // Music
    backgroundTheme: "",

    // Sound
    click:""

  }

  export let location={
    bedroom:{
      name:"bedroom",
      background:"./Images/Backgrounds/Bedroom_Night.png"
    }
  }

  export let characters = {
    narrator:{
      name:"narrator"
    },
    you:{
      name:"you",
      origin: fS.ORIGIN.CENTER,
      pose:{
        // Pfad als String angeben
        angry:"./Images/Backgrounds/Bedroom_Night.png",
        happy:"./Images/Backgrounds/Bedroom_Night.png",
        upset:"./Images/Backgrounds/Bedroom_Night.png"
      }
    }
  }

  export let dataForSave = {
    
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]")
    dataForSave = fS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    fS.Progress.go(scenes);
  }
}