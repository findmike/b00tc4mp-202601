var teams = []

teams[0] = {}
teams[0]['Chicago Bulls'] = []
teams[0]['Chicago Bulls'][0] = {}
teams[0]['Chicago Bulls'][0]['Michael Jordan'] = []
teams[0]['Chicago Bulls'][0]['Michael Jordan'][0] = {}
teams[0]['Chicago Bulls'][0]['Michael Jordan'][0]['jersey'] = 23
teams[0]['Chicago Bulls'][0]['Michael Jordan'][0]['height'] = 198

teams[0]['Chicago Bulls'][1] = {}
teams[0]['Chicago Bulls'][1]['Scottie Pippen'] = []
teams[0]['Chicago Bulls'][1]['Scottie Pippen'][0] = {}
teams[0]['Chicago Bulls'][1]['Scottie Pippen'][0]['jersey'] = 33
teams[0]['Chicago Bulls'][1]['Scottie Pippen'][0]['height'] = 203

teams[0]['Chicago Bulls'][2] = {}
teams[0]['Chicago Bulls'][2]['Dennis Rodman'] = []
teams[0]['Chicago Bulls'][2]['Dennis Rodman'][0] = {}
teams[0]['Chicago Bulls'][2]['Dennis Rodman'][0]['jersey'] = 91
teams[0]['Chicago Bulls'][2]['Dennis Rodman'][0]['height'] = 201

teams[1] = {}
teams[1]['Los Angeles Lakers'] = []
teams[1]['Los Angeles Lakers'][0] = {}
teams[1]['Los Angeles Lakers'][0]['Kobe Bryant'] = []
teams[1]['Los Angeles Lakers'][0]['Kobe Bryant'][0] = {}
teams[1]['Los Angeles Lakers'][0]['Kobe Bryant'][0]['jersey'] = 24
teams[1]['Los Angeles Lakers'][0]['Kobe Bryant'][0]['height'] = 198

teams[1]['Los Angeles Lakers'][1] = {}
teams[1]['Los Angeles Lakers'][1]['Pau Gasol'] = []
teams[1]['Los Angeles Lakers'][1]['Pau Gasol'][0] = {}
teams[1]['Los Angeles Lakers'][1]['Pau Gasol'][0]['jersey'] = 16
teams[1]['Los Angeles Lakers'][1]['Pau Gasol'][0]['height'] = 211

teams[1]['Los Angeles Lakers'][2] = {}
teams[1]['Los Angeles Lakers'][2]['Lebron James'] = []
teams[1]['Los Angeles Lakers'][2]['Lebron James'][0] = {}
teams[1]['Los Angeles Lakers'][2]['Lebron James'][0]['jersey'] = 23
teams[1]['Los Angeles Lakers'][2]['Lebron James'][0]['height'] = 206

/*
teams = [
    length: 1 
    0: {
        Chicago Bulls: [
            length: 3
            0: {
                Michael Jordan: [
                    length: 1
                    0: {
                       jersey: 23 
                       height: 198
                    } 
                ]
            }
            1: {
                Scottie Pippen: [
                    length: 1
                    0: {
                        jersey: 33 
                        height: 203
                    }
                ]
            } 
            2: {
                Dennis Rodman: [
                    length: 1
                    0: {
                        jersey: 91
                        height: 201
                    }
                ]
            }
        ]
    }
    1: {
        Los Angeles Lakers: [
            length: 3
            0: {
                Kobe Bryant: [
                    length: 1
                    0: {
                        jersey: 24 
                        height: 198
                    }
                ]
            }
            1: {
                Pau Gasol: [
                    length: 1
                    0: {
                        jersey: 16
                        height: 211
                    }
                ]
            }
            2: {
                Lebron James: [
                    length: 1
                    0: {
                        jersey: 23
                        height: 206
                    }
                ]
            }
        ]
    }
]
*/

teams[2] = {}
teams[2]['Boston Celtics'] = []
teams[2]['Boston Celtics'][0] = {}
teams[2]['Boston Celtics'][0]['Paul Pierce'] = []
teams[2]['Boston Celtics'][0]['Paul Pierce'][0] = {}
teams[2]['Boston Celtics'][0]['Paul Pierce'][0]['jersey'] = 33
teams[2]['Boston Celtics'][0]['Paul Pierce'][0]['height'] = 201

teams[2]['Boston Celtics'][1] = {}
teams[2]['Boston Celtics'][1]['Kevin Garnett'] = []
teams[2]['Boston Celtics'][1]['Kevin Garnett'][0] = {}
teams[2]['Boston Celtics'][1]['Kevin Garnett'][0]['jersey'] = 5
teams[2]['Boston Celtics'][1]['Kevin Garnett'][0]['height'] = 211

teams[2]['Boston Celtics'][2] = {}
teams[2]['Boston Celtics'][2]['Rajon Rondo'] = []
teams[2]['Boston Celtics'][2]['Rajon Rondo'][0] = {}
teams[2]['Boston Celtics'][2]['Rajon Rondo'][0]['jersey'] = 9
teams[2]['Boston Celtics'][2]['Rajon Rondo'][0]['height'] = 185

for (var i = 0; i < teams.length; i++) {
    var team = teams[i] 

    var teamNames = Object.keys(team)
    console.log(teamNames[0])

    var teamName = teamNames[0]
    
    var players = team[teamName] 
    
    for (var j = 0; j < players.length; j++){
        var player = players[j] 

        var playerNames = Object.keys(player)

        var playerName = playerNames[0]
      
        var playerInfos = player[playerName]

        var playerInfo = playerInfos[0]

        var playerInLine = '- ' + playerName + ' (' + playerInfo['jersey'] + ',' + playerInfo['height'] + 'cm).'
        console.log(playerInLine)
    } 
}

