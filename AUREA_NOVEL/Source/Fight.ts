namespace AUREA_NOVEL {


    export async function Fight(): fS.SceneReturn {
        console.log("Start Fight Sequenz");

        await fS.Location.show(locations.fight);

        // await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
        await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        if (dataForSave.choice.selectEvil) {

        } else {

        }
    }
}