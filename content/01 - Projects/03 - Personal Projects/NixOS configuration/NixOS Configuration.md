description

- [ ] Nix
	- [x] nix flakes
	- [ ] fix config warnings
	- [ ] nix flake installer 
	- [ ] [Impermanence setup with disko](https://www.youtube.com/watch?v=YPKwkWtK7l0&t=88s)
	- [ ] [Hyperland](https://www.youtube.com/watch?v=61wGzIv12Ds)
	- [ ] [Nix Dev Enviroments](https://www.youtube.com/watch?v=yQwW8dkuHqw)

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
