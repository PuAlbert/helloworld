import * as core from '@actions/core';
import { context, GitHub } from '@actions/github'


async function run(): Promise<void> {
    const token = new GitHub(core.getInput('token', {required: true}))
    console.log(111, core.getInput("token"));
    console.log(222,token);
    const files = core.getInput("files", { required: true });

    core.info(`All:${files}`);
    core.setOutput('all', files);
}

run();