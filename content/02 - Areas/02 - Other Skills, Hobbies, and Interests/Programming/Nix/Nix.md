
## Fetching urls

```nix
pkgs.fetchurl {
	url = "URL HERE";
	sha256 = "HASH HERE";
}
```

you can determine the hash of the content by using a pre-fetch script:
```Command line
nix shell nixpkgs#nix-prefetch-scripts
nix-prefetch-url "https://somesite.com/somefile.png"
```
that will download the file, then return the path of the file and its hash.

Return a complete fetchurl, fetchgit, or other call:
`nurl "https://github.com/vimjoyer/fetching-nix-video"`

Create nix packages:
https://www.youtube.com/watch?v=CqFcl4BmbN4&t=405s

## Derivations
