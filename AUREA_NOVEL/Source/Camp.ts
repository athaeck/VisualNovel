namespace AUREA_NOVEL {

    export async function Camp(): fS.SceneReturn {
        console.log("Start Camp Sequenz");

        await fS.Location.show(locations.camp);

        await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
        await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    }
}