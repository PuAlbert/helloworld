import * as core from '@actions/core';
import { context, GitHub } from '@actions/github'


async function run(): Promise<void> {
    // const token = new GitHub(core.getInput('token', {required: true}))
    const files = core.getInput("files", { required: true });

    core.info(`111:${core.getInput("token")}`);
    core.info(`222:${core.getInput("files")}`);
    core.info(`All:${files}`);
    core.setOutput('all', files);
}

run();