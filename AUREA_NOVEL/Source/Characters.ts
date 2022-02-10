///<reference path="./Main.ts"/>
namespace AUREA_NOVEL {
  const malePath: string = "./Images/Characters/player.png"
  const femalePath: string = "./Images/Characters/player_female.png"
  export type Characters = {
    [key: string]: fS.CharacterDefinition
  };

  export let characters = {
    narrator: {
      name: "Erzähler",
      origin: fS.ORIGIN.CENTER,
      pose: {
      }
    },
    du: {
      name: dataForSave.player.name,
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: ""
      }

    },
    handy: {
      name: "Handy",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Items/Handy.png"
      }
    },
    instaPost: {
      name: "Post",
      origin: fS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: ""
      }
    },
    crystal: {
      name: "Crystal",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Crystal.png"
      }
    },
    ent: {
      name: "Ent",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Ent.png"
      }
    },
    goma: {
      name: "Goma",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Goma.png"
      }
    },
    illusion: {
      name: "Illusion",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Illusion.png"
      }
    },
    inkubus: {
      name: "Inkubus",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Inkubus.png"
      }
    },
    golem: {
      name: "Stein Golem",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Iron_Golem.png"
      }
    },
    sebu: {
      name: "Sebu",
      origin: fS.ORIGIN.CENTER,
      pose: {
        idle: "./Images/Characters/Sebu.png"
      }
    }
  };
  export async function ValidateGender(): Promise<void> {
    let name: string = characters.du.name;
    const response: Response = await fetch(`https://api.genderize.io?name=${name}`);
    const body = await response.json();
    if (response.status === 200) {
      characters.du.pose.idle = await eval(`${body.gender}Path`);
    } else {
      characters.du.pose.idle = malePath;
    }
  }
}

