namespace Aurea_Novel_old {
  export async function Scene(): fS.SceneReturn {
    console.log("moin");

    let text = {
      narrator: {
        T0000: "moin",
        T0001: "1"
      },
      you: {
        T0000: "Hi",
        T0001: "2"
      }
    };




    await fS.Location.show(location.bedroom);
    await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await fS.Character.show(characters.you, characters.you.pose.happy, fS.positionPercent(30, 100));
    await fS.update(1);
    await fS.Speech.tell(characters.you, text.you.T0000);
    await fS.Speech.tell(characters.narrator, text.narrator.T0000);
    await fS.Character.hide(characters.you);



    let firstDialogueElementOptions = {
      iSayOk: "Okey",
      iChoose: "Goose",
      iSayYes: "not",
      iSayNo: "yes"
    };

    let firstDialogueElement = await fS.Menu.getInput(firstDialogueElementOptions, "indioClass");

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iChoose:
        await fS.Speech.tell(characters.you, text.you.T0000);
        break;
      case firstDialogueElementOptions.iSayOk:
        await fS.Character.show(characters.you, characters.you.pose.happy, fS.positionPercent(30, 100));
        break;
      case firstDialogueElementOptions.iSayYes:
        await await fS.Speech.tell(characters.you, text.you.T0000);
        break;
      default:
        await fS.Speech.tell(characters.you, "anny are you okey?");
        break;
    }
    // await fS.update(1);
  }
}