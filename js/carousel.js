//================================
// vars
//================================
var $items, $item, itemWidth,
    moreLeft, moreRight,
    currPos, currMarg, move, iniPos,
    itemCount = 0,
    numberItems = limitItems = 0,
    first = 0, middle = 2, last = 5;



//================================
// ini load
//================================
$(window).on('load', function() {
    iniciCarrousel();
    bts();
});


//================================
// carousel load
//================================
function iniciCarrousel() {
    $items = $('ul');
    $item = $('ul li');
    itemWidth = $item.width();
    moreLeft = $item.slice(middle, last);
    moreRight = $item.slice(first, middle);

    currMarg = $item.css('margin-right');
    move = itemWidth + parseInt(currMarg, 10);
    iniPos = -( move * (last-middle) );

    moreLeft.clone().prependTo('ul');
    moreRight.clone().appendTo('ul');
    $items.css('left', iniPos);
    $('ul li').each(function(){
        ++numberItems;
    });
    //console.log('item width: '+itemWidth);
    //console.log('current margin right: '+currMarg);
    //console.log('space to move: '+move);
    //console.log('ini Pos: '+iniPos);
    console.log('total items: '+numberItems);

}

function limitItemsFunc(){
    $('ul li').each(function(){
        ++limitItems;
    });
    if (limitItems == 20) {
        $items.slice(0,9).remove();
        console.log('llegó!!')
    }
    console.log(limitItems)

}


//================================
// bts
//================================
function bts() {
    //left click
    $('.left').click(function(){
        $items.animate({
            left: '-='+move
        }, 300, function() {
            ++itemCount;
            $('ul li:nth-child('+itemCount+')').clone().appendTo('ul');
            console.log('left clicked');
        });
        limitItemsFunc();

    });

    //right click
    $('.right').click(function(){
        $items.animate({
            left: '+='+move
        }, 300, function() {
            ++itemCount;
            $('ul li:nth-child('+numberItems+')').clone().prependTo('ul');
            $items.css('left', '-='+move);
            console.log('right clicked');
        });
        limitItemsFunc();

    });
}
