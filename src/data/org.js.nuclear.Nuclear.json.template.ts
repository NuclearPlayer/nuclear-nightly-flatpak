export default `{
    "app-id": "org.js.nuclear.Nuclear",
    "command": "run.sh",
    "base": "org.electronjs.Electron2.BaseApp",
    "base-version": "24.08",    
    "runtime": "org.freedesktop.Platform",
    "runtime-version": "24.08",
    "sdk": "org.freedesktop.Sdk",
    "separate-locales": false,
    "finish-args": [
        "--share=network",
        "--share=ipc",
        "--socket=fallback-x11",
        "--socket=wayland",
        "--device=dri",
        "--filesystem=xdg-music",
        "--filesystem=xdg-download",
        "--socket=pulseaudio",
        "--own-name=org.mpris.MediaPlayer2.nuclear"
    ],
    "modules": [
        {
            "build-commands": [
                "mkdir -p /app/main/",
                "cp -r  * /app/main/",
                "install -D org.js.nuclear.Nuclear.png --target-directory=/app/share/icons/hicolor/512x512/apps/",
                "install -D org.js.nuclear.Nuclear.metainfo.xml --target-directory=/app/share/metainfo/",
                "install -D org.js.nuclear.Nuclear.desktop --target-directory=/app/share/applications/",
                "install -D run.sh --target-directory=/app/bin/"
            ],
            "buildsystem": "simple",
            "cleanup": [
                "rm -rf app/main/org.js.*"
            ],
            "name": "nuclear",
            "sources": [
                {
                    "sha256": "{{tarballsha}}",
                    "type": "archive",
                    "url": "https://github.com/nukeop/nuclear/releases/download/{{tag}}/nuclear-{{tag}}-x64.tar.gz"
                },
                {
                    "path": "org.js.nuclear.Nuclear.metainfo.xml",
                    "type": "file"
                },
                {
                    "path": "org.js.nuclear.Nuclear.desktop",
                    "type": "file"
                },
                {
                    "path": "org.js.nuclear.Nuclear.png",
                    "type": "file"
                },
                {
                    "commands": [
                        "#!/bin/bash",
                        "if [ \\\"$GDK_BACKEND\\\" = \\\"wayland\\\" ] || [ \\\"$XDG_SESSION_TYPE\\\" = \\\"wayland\\\" ]; then",
                        "  export GDK_BACKEND=wayland",
                        "  zypak-wrapper /app/main/nuclear --enable-features=UseOzonePlatform --ozone-platform=wayland --enable-features=WaylandWindowDecorations \\\"$@\\\"",
                        "else",
                        "  zypak-wrapper /app/main/nuclear \\\"$@\\\"",
                        "fi"
                    ],
                    "dest-filename": "run.sh",
                    "type": "script"
                }
            ]
        }
    ]
}
`;
