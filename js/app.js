(function(){
  'use strict';

  var mod = angular.module('ShoppingListCheckOff', []);
  mod.controller('ToBuyController', ToBuyController)
  mod.controller('AlreadyBoughtController', AlreadyBoughtController)
  mod.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // Inject ShoppingListCheckOffService -->
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  //ToBuy Controller (Function Object)
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getBuyItems();

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  // Inject ShoppingListCheckOffService -->
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  // AlreadyBought Controller (Function Object)
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  // ShoppingListCheckOff Service -->
  function ShoppingListCheckOffService() {
    var service = this;

    //  List of shopping items
    var buyItems = [
      {
        name : 'BitCoin',
        quantity : 1
      },
      {
        name : 'Turbohammer',
        quantity : 2
      },
      {
        name : 'Teleporter',
        quantity : 3
      },
      {
        name : 'Booster',
        quantity : 5
      },
      {
        name : 'Oxygen Tank',
        quantity : 8
      },
      {
        name : 'Intergalactic Map',
        quantity : 13
      },
      {
        name : 'Power Pack',
        quantity : 21
      },
      {
        name : 'Datapad',
        quantity : 34
      },
      {
        name : 'Swoop',
        quantity : 55
      },
      {
        name : 'Robo-Hack',
        quantity : 89
      }
    ];

    var boughtItems = [];

    service.buyItem = function (itemIndex) {
      var item = buyItems[itemIndex];
      boughtItems.push(item);
      buyItems.splice(itemIndex, 1);
    };

    service.getBuyItems = function () {
      return buyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

})();
