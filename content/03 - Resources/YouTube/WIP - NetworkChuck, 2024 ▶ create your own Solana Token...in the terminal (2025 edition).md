# NetworkChuck, 2024 ▶ create your own Solana Token...in the terminal (2025 edition)
chuck makes a token on the Solana network and then i think he is gonna make a smart contract version of a todo app after? sounds fun!

>[!tldr]
>Summarize points here

![NetworkChuck, 2024 ▶ create your own Solana Token...in the terminal (2025 edition)](https://youtu.be/L4ASwqLZVV0)

## Timestamps
- YT=00:00 - Start of video

## Notes
- Chuck is using a docker container but im not the biggest fan of docker so ill likely be using a custom nix-shell

```nix
# Nix-shell example
{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
	nativeBuildInputs = with pkgs; [
    rustup
    solana-cli
	];
	
	shellHook = ''
	cargo install spl-token-cli
	Echo "Dependencies Loaded"
	'';
}
```

Command to create a solana token:
```
spl-token create-token \
--program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb \
--enable-metadata \
--decimals 9 \
mnt-your-mint-address.json
```
