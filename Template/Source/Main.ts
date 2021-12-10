namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("Tutorial_WS21 starting");


  // define transitions
  export let transitions = {
    clock: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  };


  export let sound = {
    // music
    backgroundTheme: "",

    // sound
    click: ""
  };


  export let locations = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/Bedroom.png"
    }
  };

// Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
  export let characters = {
    narrator: {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/aisaka_angry.png",
        happy: "./Images/Characters/aisaka_happy.png",
        upset: "./Images/Characters/aisaka_upset.png"
      }
    },
    kohana: {
      name: "Kohana",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/kohana_angry.png",
        happy: "./Images/Characters/kohana_happy.png",
        upset: "./Images/Characters/kohana_upset.png"
      }
    }
  };


  export let dataForSave = {

  };



  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      { scene: Introduction, name: "Introduction to FS" } 
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = fS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    fS.Progress.go(scenes);
  }
}