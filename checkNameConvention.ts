import * as core from '@actions/core';


async function run(): Promise<void> {
    const fakeFile = ["/migrations/a.js", "/migrations/b.js"];
    core.info(`All:${fakeFile.join(" ")}`);

    core.setOutput('all', fakeFile.join(" "));
}

run();