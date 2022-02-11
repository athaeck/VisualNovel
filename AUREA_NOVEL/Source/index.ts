namespace AUREA_NOVEL {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  //   console.log("Tutorial_WS21 starting");
  export const delay_5sec: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(5)]);
  export const delay_2sec: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);

  export let pulsMeter: HTMLElement;
  export let puls: HTMLElement;


  export function OpenMeter(): void {
    if (pulsMeter != null && puls != null) {
      pulsMeter.hidden = false;
      puls.hidden = false;
    }
  }
  export function CloseMeter(): void {
    if (pulsMeter != null && puls != null) {
      pulsMeter.hidden = true;
      puls.hidden = true;
    }
  }
  export async function FadeToBlack(): Promise<void> {
    await fS.Location.show(locations.blackscreen);
    fS.Character.hideAll();
    fS.Speech.hide();
  }
  //   // define transitions
  //   export let transitions = {
  //     clock: {
  //       duration: 1,
  //       alpha: "",
  //       edge: 1
  //     }
  //   };


  //   export let sound = {
  //     // music
  //     backgroundTheme: "",

  //     // sound
  //     click: ""
  //   };


  //   export let locations = {
  //     bedroom: {
  //       name: "Bedroom",
  //       background: "./Images/Backgrounds/Bedroom.png"
  //     }
  //   };

  // // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
  //   export let characters = {
  //     narrator: {
  //       name: ""
  //     },
  //     aisaka: {
  //       name: "Aisaka",
  //       origin: fS.ORIGIN.BOTTOMCENTER,
  //       pose: {
  //         angry: "./Images/Characters/aisaka_angry.png",
  //         happy: "./Images/Characters/aisaka_happy.png",
  //         upset: "./Images/Characters/aisaka_upset.png"
  //       }
  //     },
  //     kohana: {
  //       name: "Kohana",
  //       origin: fS.ORIGIN.BOTTOMCENTER,
  //       pose: {
  //         angry: "./Images/Characters/kohana_angry.png",
  //         happy: "./Images/Characters/kohana_happy.png",
  //         upset: "./Images/Characters/kohana_upset.png"
  //       }
  //     }
  //   };

  export function fromCenterToMidLeft(): fS.AnimationDefinition {
    return {
      start: {
        translation: fS.positions.center,
        rotation: -1, scaling: new fS.Position(0.1, 0.1), color: fS.Color.CSS("white", 0)
      }, end: {
        translation: fS.positionPercent(20, 70), rotation: 1, scaling: new fS.Position(0.1, 0.1), color: fS.Color.CSS("white", 1)
      },
      duration: 2,
      playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function fromDownLeftToTopRight(): fS.AnimationDefinition {
    return {
      start: {
        translation: fS.positions.bottomleft,
        rotation: -1, scaling: new fS.Position(0.1, 0.1), color: fS.Color.CSS("white", 1)
      }, end: {
        translation: fS.positions.topright, rotation: 1, scaling: new fS.Position(0.1, 0.1), color: fS.Color.CSS("white", 1)
      },
      duration: 5,
      playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function fromLeftToRight(): fS.AnimationDefinition {
    return {
      start: {
        translation: fS.positionPercent(10, 80),
        rotation: -1, scaling: new fS.Position(1, 1), color: fS.Color.CSS("white", 1)
      }, end: {
        translation: fS.positionPercent(90, 80), rotation: 1, scaling: new fS.Position(1, 1), color: fS.Color.CSS("white", 1)
      },
      duration: 5,
      playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export let dataForSave = {
    player: {
      name: ""
    },
    choice: {
      selectHandy: false,
      selectEvil: false
    },
    puls: 60,
    yourPuls: "60"
  };



  window.addEventListener("load", start);
  async function start(_event: Event): Promise<void> {
    pulsMeter = document.getElementById("puls");
    puls = document.getElementById("yourPuls");
    CloseMeter();
    gameMenu = fS.Menu.create(inGameMenu, buttonFunctions, "game-menu");
    let scenes: fS.Scenes = [
      { scene: Intro, name: "Introduction" },
      { scene: Glade, name: "Glade" },
      { id: "camp", scene: Camp, name: "Camp", next: "fight" },
      { id: "vault", scene: Vault, name: "Vault", next: "fight" },
      { id: "fight", scene: Fight, name: "Fight" },
      { id: "end", scene: End, name: "Ende" }
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = fS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    await fS.Progress.go(scenes);
  }
}