const ForceSend = artifacts.require("ForceSend");

module.exports = function(deployer) {
  deployer.deploy(ForceSend, "Dai");
};
