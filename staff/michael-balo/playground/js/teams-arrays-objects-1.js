// TODO add more teams (3) and players (3 per team)
// TODO print the players in the console (showing the team, the players, and the info related to them)
/*
[Team name]
- [Player name] ([jersey], [height]cm)
- [Player name] ([jersey], [height]cm)
...
[Team name]
- [Player name] ([jersey], [height]cm)
- [Player name] ([jersey], [height]cm)
...
[Team name]
- [Player name] ([jersey], [height]cm)
- [Player name] ([jersey], [height]cm)
...
*/

var teams = []

teams[0] = {}
teams[0]['name'] = 'Chicago Bulls'
teams[0]['players'] = []
teams[0]['players'][0] = {}
teams[0]['players'][0]['name'] = 'Michael Jordan'
teams[0]['players'][0]['jersey'] = 23
teams[0]['players'][0]['height'] = 198

teams[0]['players'][1] = {}
teams[0]['players'][1]['name'] = 'Scottie Pippen'
teams[0]['players'][1]['jersey'] = 33
teams[0]['players'][1]['height'] = 203

teams[0]['players'][2] = {}
teams[0]['players'][2]['name'] = 'Dennis Rodman'
teams[0]['players'][2]['jersey'] = 91
teams[0]['players'][2]['height'] = 201

teams[1] = {}
teams[1]['name'] = 'Los Angeles Lakers'
teams[1]['players'] = []
teams[1]['players'][0] = {}
teams[1]['players'][0]['name'] = 'Kobe Bryant'
teams[1]['players'][0]['jersey'] = 24
teams[1]['players'][0]['height'] = 198

teams[1]['players'][1] = {}
teams[1]['players'][1]['name'] = 'Pau Gasol'
teams[1]['players'][1]['jersey'] = 16
teams[1]['players'][1]['height'] = 211

teams[1]['players'][2] = {}
teams[1]['players'][2]['name'] = 'Lebron James'
teams[1]['players'][2]['jersey'] = 23
teams[1]['players'][2]['height'] = 206

teams[2] = {}
teams[2]['name'] = 'Boston Celtics'
teams[2]['players'] = []
teams[2]['players'][0] = {}
teams[2]['players'][0]['name'] = 'Paul Pierce'
teams[2]['players'][0]['jersey'] = 33
teams[2]['players'][0]['height'] = 201

teams[2]['players'][1] = {}
teams[2]['players'][1]['name'] = 'Kevin Garnett'
teams[2]['players'][1]['jersey'] = 5
teams[2]['players'][1]['height'] = 211

teams[2]['players'][2] = {}
teams[2]['players'][2]['name'] = 'Rajon Rondo'
teams[2]['players'][2]['jersey'] = 91
teams[2]['players'][2]['height'] = 185


for (var i = 0; i < teams.length; i++) {
    var team = teams[i]
   /*console.log(team) no es valido xq me devuelve un {[]}*/

    var teamName = team['name']
    console.log(teamName)

    var players = team['players']
   /*console.log(players) me devuelve un [] con jugadores*/

    for (var p = 0; p < players.length; p++){
        var player = players[p]
       /*console.log(player['name'])*/
    
        var playerJersey = player['jersey']

        var playerHeight = player['height']

        var playerInLine = '- ' + player['name'] + ' (#' + player['jersey'] + ',' + player['height'] + 'cm).'
        console.log(playerInLine)
    }
   
}