>[!warning]
>this was before i understood that flakes can do this.


https://github.com/orgs/community/discussions/25234
how to make a github action change a file in a repo

post versions
https://github.com/oxen-io/session-desktop/tags

Nix Package
https://github.com/NixOS/nixpkgs/blob/nixos-unstable/pkgs/applications/networking/instant-messengers/session-desktop/default.nix#L59

**Github actions workflow:**
1. Check for new version of {Package}
2. get sha256 hash of new version
3. modify Nix package and with updated version number and hash