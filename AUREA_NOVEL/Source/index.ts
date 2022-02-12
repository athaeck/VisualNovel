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
    try {
      pulsMeter = document.getElementById("puls");
      puls = document.getElementById("yourPuls");
      CloseMeter();

      gameMenu = fS.Menu.create(inGameMenu, buttonFunctions, "game-menu");
      buttonFunctions("Menü schließen");
      let scenes: fS.Scenes = [
        { id: "intro", scene: Intro, name: "Introduction" },
        { id: "glade", scene: Glade, name: "Glade" },
        { id: "camp", scene: Camp, name: "Camp", next: "fight" },
        { id: "vault", scene: Vault, name: "Vault", next: "fight" },
        { id: "fight", scene: Fight, name: "Fight" },
        { id: "end", scene: End, name: "Ende" }
      ];



      let uiElement: HTMLElement = document.querySelector("[type=interface]");
      dataForSave = fS.Progress.setData(dataForSave, uiElement);
      await ValidateGender();
      // start the sequence
      await fS.Progress.go(scenes);
    } catch (e) {
      console.log(e);
    }
  }
}