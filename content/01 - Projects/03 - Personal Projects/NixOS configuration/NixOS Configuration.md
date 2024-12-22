I have been working on getting my NixOS config exactly how i want it.

- [ ] Nix
	- [x] nix flakes
	- [x] fix config warnings
	- [ ] nix flake installer 
	- [ ] [Impermanence setup with disko](https://www.youtube.com/watch?v=YPKwkWtK7l0&t=88s)
		- [ ] learn basics
		- [ ] add to config
	- [ ] [Hyperland](https://www.youtube.com/watch?v=61wGzIv12Ds)
		- [ ] learn basics, what is it? why should you use or not use it?
		- [ ] setup hyperland
	- [ ] [Nix Dev Enviroments](https://www.youtube.com/watch?v=yQwW8dkuHqw)
		- [ ] start learning basics
		- [ ] create boilerplate's for each language I want to develop in

## Modular NixOS
[Vimjoyer Modular NixOS Config video](https://www.youtube.com/watch?v=vYc6IzKvAJQ)

```
# Modular nixos configuration dir tree
- flake.nix
- Hosts
	- Laptop
		- configuration.nix
		- hardware-configuration.nix
	- Desktop
		- configuration.nix
		- hardware-configuration.nix
	- Server
		- configuration.nix
		- hardware-configuration.nix
- NixOS Modules
	- default.nix
	- module1.nix
	- module2.nix
	- sub-dir
		- module3.nix
```

## NH the nix helper
[Vimjoyer nix helper video](https://www.youtube.com/watch?v=DnA4xNTrrqY&t=91s)
