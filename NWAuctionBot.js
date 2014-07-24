var items = Array;
items = GetAvailableItemList();
for(var i = 0; i< items.Lenght;i++)
{
    PutLot(items[i]);
}

function GetAvailableItemList()
{
    var items = [];
    //items= LoadAllItems();
    items = items.filter(MeetList);
    return items;
}
function PutLot(item)
{
    var prices = GetCurrentBids();
    var buyOut = GetBuyOutPrice(prices);
    var startBid = GetStartBid(prices, buyOut);
    MakeLot(item);
}