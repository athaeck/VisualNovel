namespace Aurea_Novel {
  export async function SevdaTest(): fS.SceneReturn {
    console.log("moin");

    // let text = {
    //   narrator: {
    //     T0000: "moin",
    //     T0001: "1"
    //   },
    //   you: {
    //     T0000: "Hi",
    //     T0001: "2"
    //   }
    // };
    let delay: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(1)]);

    dataForSave.nameOfYou = await fS.Speech.getInput();
    characters.you.name = dataForSave.nameOfYou;
    console.log(dataForSave);

    await fS.Location.show(location.bedroom);
    await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await fS.Character.show(characters.clock, characters.clock.pose.idle, fS.positions.center);
    await delay();
    await fS.update(1);
    await fS.Speech.tell(characters.you, "Huch eine Kamera, soll ich sie aufheben?");
    // await fS.Speech.tell(characters.narrator, text.narrator.T0000);
    // await fS.Character.animate(characters.you, characters.you.pose.angry, fromLeftToRight());
    // await fS.Character.hide(characters.you);

   

    let selectCameraOptions = {
      yes: "Kamera aufheben",
      no: "Kamera liegen lassen"
    };

    let camsSel: boolean = false;
      
    let kameraSelectOptions = await fS.Menu.getInput(selectCameraOptions, "indioClass");

    switch (kameraSelectOptions) {
      case selectCameraOptions.yes:
        await fS.Speech.tell(characters.you, "wunderprächtig");
        camsSel = true;
        break;
    //   case firstDialogueElementOptions.iSayOk:
    //     await fS.Character.show(characters.you, characters.you.pose.happy, fS.positionPercent(30, 100));
    //     break;
    //   case firstDialogueElementOptions.iSayYes:
    //     await  await fS.Speech.tell(characters.you, text.you.T0000);
    //     break;
      default:
    //     await fS.Speech.tell(characters.you, "anny are you okey?");
        await fS.Character.animate(characters.clock, characters.clock.pose.idle, fromLeftToRight());
        await fS.Character.hide(characters.clock);
        break;
    }
    // await fS.update(1);
  }
}