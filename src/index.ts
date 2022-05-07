import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import download from "download";
import { program } from "commander";
import hasha from 'hasha';

const jsonConfigTemplate = './data/org.js.nuclear.Nuclear.json.template.ts';
const metainfoTemplate = './data/org.js.nuclear.Nuclear.metainfo.xml.template';

const packageUrlTemplate = "https://github.com/nukeop/nuclear/releases/download/{{tag}}/nuclear-{{tag}}.tar.gz";
const packageFilenameTemplate = "nuclear-{{tag}}.tar.gz";

program
    .option(
        "--tag <url>",
        "tag of the latest release",
        "nightly"
    )
    .option("--temp-dir <dir>", "Temporary directory name", "temp")
    .option(
        "--flatpak-repo-path <path>",
        "Flatpak package repository path",
        "/tmp/org.js.nuclear.Nuclear"
    );
program.parse();
const options = program.opts();

(async () => {
    const packageUrl = handlebars.compile(packageUrlTemplate)({ tag: options.tag });
    const packageFilename = handlebars.compile(packageFilenameTemplate)({ tag: options.tag });
    const localTarballPath = path.join(options.tempDir, packageFilename);

    try {
        await fs.promises.access(options.tempDir);
    } catch (e) {
        await fs.promises.mkdir(options.tempDir);
    }

    try {
        await fs.promises.access(localTarballPath, fs.constants.F_OK);
        console.log("Tarball already exists");
    } catch (e) {
        console.log(`Downloading ${packageUrl}`);
        await download(packageUrl, options.tempDir);
        console.log("Downloaded");
    }

    const now = new Date();
    const tarballHash = await hasha.fromFile(localTarballPath, { algorithm: 'sha256' });
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    console.log(`Tarball hash: ${tarballHash}`);
    console.log(`Date: ${date}`);

    const jsonConfig = handlebars.compile(jsonConfigTemplate)({
        tag: options.tag,
        tarballsha: tarballHash,
    });

    const metainfo = handlebars.compile(metainfoTemplate)({
        tag: options.tag,
        date
    });

    try {
        fs.promises.writeFile(
            path.join(options.flatpakRepoPath, "org.js.nuclear.Nuclear.json"),
            jsonConfig
        );
        fs.promises.writeFile(
            path.join(options.flatpakRepoPath, "org.js.nuclear.Nuclear.metainfo.xml"),
            metainfo
        );
    } catch (e) {
        console.error("Error writing files", e);
    }

})();