namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 6 6 1 1 1 1 1 1 . 
. 6 1 1 1 1 1 1 6 6 1 1 1 1 1 1 
. . 6 6 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . 1 1 6 6 1 1 . . 6 6 1 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . 5 5 . . . 
. . . . . . . . . . 5 5 5 5 . . 
. . . . . . . . 2 2 2 5 5 . . . 
. . . . . . 2 2 2 2 2 b a . . . 
. . . 2 2 2 2 2 2 2 2 b a . . . 
. . 2 2 2 2 2 2 2 2 2 b a . . . 
. . . 2 2 2 2 2 2 2 2 b a . . . 
. . . . . . 2 2 2 2 2 b a . . . 
. . . . . . . . 2 2 2 b a . . . 
. . . . . . . . . . 2 b a . . . 
. . . . . . . . . . . b a . . . 
. . . . . . . . . . . b a . . . 
. . . . . . . . . . . b a . . . 
. . . . . . . . . . . b a . . . 
. . . . . . . . . b b b b a a . 
. . . . . . . . b b b b b b b a 
`
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Kirby.vy == 0) {
        Kirby.vy = -250
    }
})
function spawn () {
    Kirby = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 a 3 3 3 c 3 3 3 3 3 . . 
. 3 3 a 3 3 3 3 3 c c c 3 3 . . 
. . 3 a 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . . . a a 3 3 3 3 3 a . . . . 
. . . a a a a . . a a a a . . . 
`, SpriteKind.Player)
    Kirby.setPosition(16, 70)
    Kirby.ay = 700
    controller.moveSprite(Kirby, 100, 0)
    scene.cameraFollowSprite(Kirby)
}
let Kirby: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`200008000000000000000000000000000000000e00000000000000000000000000000e00000000000000000e0000000000000000000000000e0000000e00000000000000000e0000000000000000000000000e00000000000000000000000e00010202020000000e000102020203000000000000000e00000102030000000000040505050000000000040505051000000000000c00000c00040510010202020312131313010202030012131313110001030000000000000012131104050505101213131304050510001213131311000410000000000e00001213111213131311121313131213131100121313131100121100000000000000121311121313131112131313`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
. . . . . 2 2 2 2 2 . . . . . . . . . . 2 2 2 . . . . . 2 2 2 2 
. . . . . 2 2 2 2 2 . . . . . 2 . . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles19,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles20,sprites.builtin.forestTiles4,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,myTiles.tile1,sprites.builtin.forestTiles23,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles9,sprites.builtin.forestTiles10,sprites.builtin.forestTiles8,sprites.builtin.forestTiles16,myTiles.tile2],
            TileScale.Sixteen
        ))
spawn()
let Finish = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 1 . . 
. . . . . . . . . . 2 2 5 5 . . 
. . . . . . . . . 2 2 2 a b . . 
. . . . . . . 2 2 2 2 2 a b . . 
. . . . . 2 2 2 2 2 2 2 a b . . 
. . . . 2 2 2 2 2 2 2 2 a b . . 
. . . . . . . 2 2 2 2 2 c b . . 
. . . . . . . . . . 2 2 c b . . 
. . . . . . . . . . . . c b . . 
. . . . . . . . . . . . c b . . 
. . . . . . . . . . . . c b . . 
. . . . . . . . . . . c b b b . 
. . . . . . . . . . . c b b b . 
. . . . . . . . . . c b b b b b 
`, SpriteKind.Goal)
Finish.setPosition(500, 25)
info.setScore(3)
game.onUpdate(function () {
    if (Kirby.y >= scene.screenHeight()) {
        Kirby.destroy(effects.ashes, 200)
        info.changeScoreBy(-1)
        pause(1000)
        spawn()
    }
})
game.onUpdate(function () {
    if (Kirby.vy < 0) {
        Kirby.setImage(img`
. . . . . . 3 3 3 3 . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 c 3 c 3 . . . 
. . . 3 3 3 3 3 3 c 3 c 3 . . . 
. . . 3 3 3 3 3 3 c 3 c 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 c c c c 3 . . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . 3 a 3 3 3 3 a . . . . 
. . . . . a a 3 3 3 a a . . . . 
. . . . a a a . . a a a . . . . 
. . . . . a . . . . a . . . . . 
`)
    } else if (Kirby.vy > 0) {
        Kirby.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 3 . 
3 3 3 3 3 3 3 3 3 3 c 3 c 3 3 3 
3 3 a a 3 3 3 3 c 3 3 3 3 3 3 3 
3 3 a 3 a 3 3 3 3 c c c 3 3 3 a 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 a . 
. 3 a a 3 3 3 3 3 3 3 3 3 3 . . 
. . a a a 3 3 3 3 3 3 3 3 . . . 
. . . a a a 3 3 3 3 3 a a . . . 
. . . . a a . . . a a a . . . . 
`)
    } else if (controller.down.isPressed()) {
        Kirby.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
3 3 3 3 3 3 3 3 3 c c 3 c c 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 a 3 3 a 3 3 3 3 c c c 3 3 3 a 
3 a 3 a a 3 3 3 3 3 3 3 3 3 a 3 
a a a a a 3 3 3 3 3 3 a a a a a 
`)
    } else {
        Kirby.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 3 3 3 3 3 3 c 3 c 3 . . 
. 3 3 3 a 3 3 3 c 3 3 3 3 3 . . 
. 3 3 a 3 3 3 3 3 c c c 3 3 . . 
. . 3 a 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . . . a a 3 3 3 3 3 a . . . . 
. . . a a a a . . a a a a . . . 
`)
    }
    if (Kirby.vx < 0) {
        Kirby.image.flipX()
    }
})
