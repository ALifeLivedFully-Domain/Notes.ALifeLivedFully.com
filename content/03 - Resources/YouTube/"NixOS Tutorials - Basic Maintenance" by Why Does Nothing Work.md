# "NixOS Tutorials - Basic Maintenance" by Why Does Nothing Work
basic skills to upkeep your NixOS machine.

![Embeded video](https://www.youtube.com/watch?v=EI-6QX60WXc)

## Notes
I dont feel like taking much notes since i can just write the code into my configuration and reference it later. i should still take some notes tho.

---
## Updates
Updating packages, channels, etc.

### Manual
you can rebuild your system to upgrade the inputs: `doas nixos-rebuild switch --flake ~/.dotfiles/#ThinkPad`

### Scheduled
```nix
system.autoUpgrade = {
    enable = true;
    flake = inputs.self.outPath; # for flake based systems
    flags = [
      "--update-input"
      "nixpkgs"
      "-L" 
    ];
    dates = "09:00";
    randomizedDelaySec = "45min";
  };
```
to check the upgrade status run: `systemctl status nixos-upgrade.service` 

---
## Rollbacks (Generations)
Rollbacks can roll back to a working generation but it doesnt roll back:
- Config files
- documents
- etc

**Commands**:
- List generations & current generation: `nixos-rebuild list-generations`
- Rollback (without reboot): `nix-env --switch-generation 60 -p /nix/var/nix/profiles/system` 
	- Rollback (with reboot): reboot then pick a generation to boot into.
- set current generation to default boot: `/run/current-system/bin.switch-to-configuration boot` 

roll back by rebooting and choosing a generation. you can make this the default generation to boot from by running: `/run/current-system/bin.switch-to-configuration boot` 

Another way to check which generation you are running:  
1. run `ls /var/run/*system -lah` which will return generations and hashes. 
2. run `ls -lah /nix/var/nix/profiles/|grep HASH` replacing HASH with the hash you are checking.

---
## Garbage Collection

### Manual
- run the gc: `nix-collect-garbage --delete-older-than 10d`
### Scheduled
```nix
nix.gc = {
    automatic = true;
    dates = "02:05";
    randomizedDelaySec = "45min";
    options = "--delete-older-than 365d";
  };
```

---
## Nix Store Optimization

### Manual
- to optimize: ``

### Scheduled
```nix
nix.optimise = {
    automatic = true;
    dates = [ "01:05" ];
  };
```