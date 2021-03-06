ig.module( 'game.levels.title' )
.requires( 'impact.image','game.entities.bug','game.entities.player' )
.defines(function(){
LevelTitle=/*JSON[*/{
	"entities": [
		{
			"type": "EntityBug",
			"x": 392,
			"y": 290
		},
		{
			"type": "EntityBug",
			"x": 700,
			"y": 706
		},
		{
			"type": "EntityBug",
			"x": 80,
			"y": 642
		},
		{
			"type": "EntityBug",
			"x": 332,
			"y": 786
		},
		{
			"type": "EntityPlayer",
			"x": 568,
			"y": 538
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 16,
			"height": 14,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles-70.png",
			"repeat": true,
			"preRender": false,
			"distance": "2",
			"tilesize": 70,
			"foreground": false,
			"data": [
				[0,0,0,0,0,41,42,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,13,14,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,13,14,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,13,14,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,13,14,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "main",
			"width": 16,
			"height": 14,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles-70.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 70,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,91,128,91,128,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,169,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,79,65,65,65,51,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,155,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,149,120,121],
				[0,0,0,0,0,0,149,120,120,121,0,0,0,0,0,0],
				[149,121,0,0,0,0,0,177,177,0,0,0,0,0,0,0],
				[0,0,0,155,0,135,120,120,120,120,107,0,0,0,0,0],
				[0,0,0,149,120,120,120,120,120,120,120,120,121,0,0,0],
				[0,0,0,0,177,177,177,177,177,177,177,177,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 16,
			"height": 14,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 70,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,12,12,12,12,12,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
				[0,0,0,0,0,0,1,0,0,1,0,0,0,12,12,12],
				[0,0,0,0,0,0,12,12,12,12,0,0,0,0,0,0],
				[12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,12,12,12,12,12,12,0,0,0,0,0],
				[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
				[0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelTitleResources=[new ig.Image('media/tiles-70.png'), new ig.Image('media/tiles-70.png')];
});