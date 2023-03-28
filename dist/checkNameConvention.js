"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const nameRules = [
    /\d+_create_(.*?)_table/,
    /\d+_(add|modify|add_index)_(.*?)_to_(.*?)_table/,
    /\d+_(drop|remove_index)_(.*?)_from_(.*?)_table/,
    /\d+_rename_(.*?)_to_(.*?)_(.*?)_table/
];
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = core.getInput("files");
        core.info(`inputFiles:${core.getInput("files")}`);
        if (files) {
            const filesArray = files.split(" ").filter(file => file.startsWith("migrations/"));
            for (let file of filesArray) {
                core.info(`file:${file}`);
            }
            const isPassCheck = checkRules(filesArray);
            if (!isPassCheck) {
                core.error("-1");
            }
            else {
                core.info("pass");
            }
        }
    });
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
const checkRules = (toCheckFiles) => {
    let isPassCheck = true;
    for (const file of toCheckFiles) {
        let isFilePass = false;
        for (const rule of nameRules) {
            const checkRet = rule.exec(file);
            if (checkRet) {
                // console.log(checkRet);
                isFilePass = true;
                break;
            }
        }
        if (!isFilePass) {
            core.info(`file:${file} must obey the name convention`);
            isPassCheck = false;
        }
    }
    return isPassCheck;
};
run();
