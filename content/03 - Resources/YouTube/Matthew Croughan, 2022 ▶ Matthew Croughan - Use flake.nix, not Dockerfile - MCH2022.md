# Matthew Croughan, 2022 ▶ Matthew Croughan - Use flake.nix, not Dockerfile - MCH2022
discusses using flake.nix instead of dockerfiles and possibly a drop in replacement for docker in nix.

>[!tldr]
>1. Docker builds are repeatable **not** reproducible.
>2. in nix everything is evaluated as an expession not a series of steps

![Matthew Croughan, 2022 ▶ Matthew Croughan - Use flake.nix, not Dockerfile - MCH2022](https://youtu.be/0uixRE8xlbY)

## Timestamps
- YT=00:00 - Start of video

## Notes
- Docker is great but it essentially trys to make a reproducable system by simply repeating the steps you took to get there which doesnt work. its repeatable but not reproducable.