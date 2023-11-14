$(document).ready(function() {
    
    //EXPERIENCE CALCULATOR
    const expTiers = [
        300,
        900,
        2700,
        6500,
        14000,
        23000,
        34000,
        48000,
        64000,
        85000,
        100000,
        120000,
        140000,
        165000,
        195000,
        225000,
        265000,
        305000,
        355000
    ];
    let currentXP = 0,
        currentLevel = 1,
        nextLevel = 0;
    $('.experience input').val(currentXP);
    
    //get next level exp
    function getNext() {
        for (let i=0; i<expTiers.length; i++) {
            nextLevel = expTiers[i];
            if (currentXP < expTiers[i]) {
                currentLevel = i+1;
                break;
            }
        }
        $('.experience .nextlevel').html(nextLevel);
        $('.experience .level span').html(currentLevel);
    };
    getNext();
    $('.experience input').on('input', function() {
        currentXP = $(this).val();
        getNext();
    });
    
    //MONEY WEIGHT CALCULATOR
    let weights = {
        gold: 0,
        silver: 0,
        copper: 0
    };
    
    $('.money input').on('input', function() {
        
        let type = $(this).attr('id'),
            val = $(this).val(),
            multi = (type == 'gold') ? 0.1 : ((type == 'silver') ? 0.05 : 0.02);
        weights[type] = Math.round((val*multi) * 10) / 10;
        $('.'+type+'.result').html(weights[type]+' lbs');
        
        //GET TOTAL
        let total = Math.round((weights.gold + weights.silver + weights.copper)*10) / 10;
        $('.total').html(total+' lbs');
    
    });
    
});