# NetworkChuck, 2024 ▶ create your own Solana Token...in the terminal (2025 edition)
chuck makes a token on the Solana network and then i think he is gonna make a smart contract version of a todo app after? sounds fun!

>[!tldr]
>1. mmm

![embeded video](https://www.youtube.com/watch?v=L4ASwqLZVV0)

## Notes
- Chuck is using a docker container but im not the biggest fan of docker so ill likely be using a custom nix-shell

```nix
# Nix-shell example
{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
	nativeBuildInputs = with pkgs; [
    rustc
    solana-cli
	];
	
	shellHook = ''
	Echo "Dependencies Loaded"
	'';
}
```
