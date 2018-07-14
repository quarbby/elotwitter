$(document).ready(function(){

    /* Artificial Intelligence */

    var ai_tw_seeds_html = "";
    for (var i=0; i<ai_tw_seeds.length; i++) {
        ai_tw_seeds_html += '<li class="list-group-item"><a target=\"_blank\" href=\"http://www.twitter.com/' + ai_tw_seeds[i] + '\">' + ai_tw_seeds[i]  + '</a></li>'
    }
    
    document.getElementById('list-expert-seed').innerHTML = ai_tw_seeds_html;

    var ai_count = 20;
    var ai_html = "";
    for (var i=0; i<ai_count; i++) {
        var ai_data_object = ai_ranking[i];
        ai_html += '<li class="list-group-item"><a target=\"_blank\" href=\"http://www.twitter.com/' + ai_data_object['screen_name'] + '\">' + ai_data_object['screen_name']  + '</a></li>'
        ai_html += '<span class="badge badge-secondary">' + ai_data_object['elo_score'] + '</span>'
    }

    document.getElementById('list-expert').innerHTML = ai_html;

    // Ai trend Seeds
    var ai_seeds_html = "";
    for (var i=0; i<ai_seeds.length; i++) {
        ai_seeds_html += '<li class="list-group-item">' + ai_seeds[i] + '</li>'
    }
    document.getElementById('list-keywords').innerHTML = ai_seeds_html;

});