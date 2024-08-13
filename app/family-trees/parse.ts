import data from './data.json';

export function getFamNames() {
    const fam_names = [];
    for (const fam of data) {
        fam_names.push(fam["Fam"]);
    }
    return fam_names;
}

export function assembleTree(fam_name) {
    let fam_obj;
    for (const fam of data) {
        if (fam["Fam"] == fam_name) {
            fam_obj = fam;
            break;
        }
    }

    if (!fam_obj) {
        throw new Error("Fam name: " + fam_name + " not recognized");
    }

    const heads = fam_obj["Heads"];

    //TODO: make the output multiple trees, per head
    const trees = [];
    for (const head of heads) {
        trees.push(constructTree(head, fam_obj["Members"]));
    }
    return trees;
}

//helper function
function constructTree(name, fam_members) {
    const children = [];
    
    let member;
    for (const myMember of fam_members) {
        if (myMember["Name"] == name) {
            member = myMember;
            break;
        }
    }

    if (!member) {
        throw new Error("Name: " + name + " not recognized in fam: " + fam_members[0]["Fam"]);
    }

    for (const little of member["Little"]) {
        children.push(constructTree(little, fam_members));
    }

    if (children.length === 0) {
        return ({
            label: name,
            expanded: true,
            className: 'bg-indigo-500 text-white',
            style: { borderRadius: '12px' },
            data: {
                name: name,
            }
        });
    }

    return ({
        label: name,
        expanded: true,
        className: 'bg-indigo-500 text-white',
        style: { borderRadius: '12px' },
        data: {
            name: name,
        },
        children: children
    });
}