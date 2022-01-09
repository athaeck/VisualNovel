namespace Template {
    export type Items = {
        [key: string]: fS.ItemDefinition
    };
    export let items: Items = {
        pen: {
            name : "das",
            description : "ist",
            image : "das"
        }
    };
    export function AddItem(item: fS.ItemDefinition): void {
        items[item.name] = item;
    }
    export async function GetInventory(): Promise<string[]> {
        return await fS.Inventory.open();
    }
    export function AddItemToInventory(item: string): boolean {
        const i: fS.ItemDefinition = items[item];
        if (i) {
            fS.Inventory.add(i);
            return true;
        } else {
            return false;
        }
    }
}