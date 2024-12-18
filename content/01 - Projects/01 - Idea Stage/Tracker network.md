tracker networks like apples "find my" network and tiles network are extremely usefull tools however they rely on a closed source company which often relies on that companies hardware. i believe there is a gap in the market for a open source tracking network which is platform agnostic and can run on open source hardware.(+bonus if it can piggyback on existing networks like OpenHayStack does)

## Find My Network
first is apples find my network as they have the largest coverage.

according to an answer [Here](https://crypto.stackexchange.com/questions/102249/apple-find-my-key-rotation) on stack exchange this is how AirTags rolling public keys work:

```
Initially, each owner device generates a private–public key pair (d0,p0) on the NIST P-224 curve and a 32-byte symmetric key SK0

that together form the master beacon key. Those keys are never sent out.

This approach makes device tracking hard by regularly changing the contents of the BLE advertisements. In particular, OF uses the concept of rolling keys that can be deterministically derived if one knows the initial input keys (d0,p0)
and SK0

but are otherwise unlinkable.

It uses the ANSI X.963 KDF with SHA-256 and a generator G

of the NIST P-224 curve:

SKi=KDF(SKi−1,"update",32)

updates the secret key which is 32 bytes long.

(ui,vi)=KDF(SKi,"diversify",72)
derives the anti-tracking keys ui,vi

from the new symmetric key, each 36 bytes long.

di=(d0∗ui)+vi,pi=di∗G
create the advertisement key pair using the anti-tracking keys and the master beacon key d0. When the device goes missing and cannot connect to WiFi or mobile network it starts transmitting the derived public key pi

for a limited period of time in a bluetooth payload.

The apple doc also suggests the keys are rolled every 15 minutes or so.
```

a group of researchers have reverse engineered the find my network in an article [Here](https://arxiv.org/pdf/2103.02282.pdf) here are some key points:

```
key points here!
```

Projects Piggybacking the Find-My network:
[[OpenHayStack]] - allow other devices to report to the find my network as though they are AirTags.

[[SendMy]] - upload arbitrary data from non-internet-connected devices by sending Find My BLE broadcasts to nearby Apple devices that then upload the data for you using a ESP32 firmware that turns the microcontroller into an (upload only) modem.

