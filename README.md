![image](https://user-images.githubusercontent.com/38456463/43392866-43c69cf4-93f5-11e8-81e2-3e3f81b6ca1d.png)

# Node-Cryptonote-Util

Supported on the following platforms:

* Linux 64-bit
* Windows 64-bit

## Dependencies

* NodeJS (https://nodejs.org/) v6/8/10
* Boost (http://www.boost.org/)

## Installation Instructions

### *Nix

```bash
sudo apt-get install libboost-all-dev
git clone https://github.com/plenteum/node-cryptonote-util
cd node-cryptonote-util
npm install && npm test
```

### Windows

#### Prerequisite

Read very carefully if you want this to work right the first time.

1) Open a *Windows Powershell* console as **Administrator**
2) Run the command: `npm install -g windows-build-tools --vs2015`
   ***This will take a while. Sit tight.***
   
Once the prerequisites are complete, proceed with the following:

```bash
cd <your node-cryptonote-util directory>
npm install && npm test
```
