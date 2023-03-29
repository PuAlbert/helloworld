import * as core from '@actions/core';

const nameRules = [
    /\d+_create_(.*?)_table/,
    /\d+_(add|modify|add_index)_(.*?)_to_(.*?)_table/,
    /\d+_(drop|remove_index)_(.*?)_from_(.*?)_table/,
    /\d+_rename_(.*?)_to_(.*?)_(.*?)_table/
];

function run() {
    const files: string = core.getInput("files");
    core.info(`inputFiles :${core.getInput("files")}`);
    if (files) {
        const filesArray: string[] = files.split(" ").filter(file => file.startsWith("migrations/"));
        core.info(`migration files :${filesArray.join(" ")}`);
        const isPassCheck: boolean = checkRules(filesArray);
        if (!isPassCheck) {
            core.setFailed("-1");
        } else {
            core.info("pass");
        }
    }
}

// const _testCheckFile = ()=>{
//     const toCheckFiles = [
//         "20230327023257_create_demo_table",
//         "20230327023538_add_age_to_demo_table",
//         "20230327023733_drop_age_from_demo_table",
//         "20230327023940_rename_desc_to_msg_demo_table",
//         "20230327024123_modify_msg_to_demo_table",
//         "20230327024349_add_index_idx_name_to_demo_table",
//         "20230327025515_remove1_index_idx_name_from_demo_table",
//     ];
//     checkRules(toCheckFiles);
// }

const checkRules = (toCheckFiles: string[]) => {
    let isPassCheck = true;
    toCheckFiles.forEach(file => {
        let isFilePass = false;
        for (const rule of nameRules) {
            const checkRet = rule.exec(file);
            if (checkRet) {
                core.info(`file:${file} pass`);
                isFilePass = true;
                break;
            }
        }
        if (!isFilePass) {
            core.error(`file:${file} must obey the name convention`);
            isPassCheck = false;
        }
    });
    return isPassCheck;
}

run();