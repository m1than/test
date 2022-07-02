exports.receiveInventory = (data) => {
  const steamInventory = require('get-steam-inventory');
  const user = data._json
  const steamid = user.steamid
  const appid = 730 // айди игры, будем менять динамически
  const contextid = '2'
  const tradeable = true

  steamInventory.getinventory(appid, steamid, contextid, tradeable).then(data => {
    console.log(data.marketnames);
  }).catch(err => console.log(err));

}
