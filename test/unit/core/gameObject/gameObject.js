describe('Game Object', function() {

var GameObject = game.global.core.gameObject;
var gameData;
var go;

	beforeEach(function() {
		gameData = {};
		go = new GameObject(game, 'test');
	});

	it('Does GameObject Exist', function() {
		expect(go).not.toBe('undefined');
	});

	it('isActive set at beginning', function() {
		expect(go.isActive).toBe(true);
	});

	it('Does set active change property', function() {
		go.setActive(false);
		expect(go.isActive).toBe(false);
	});

	it
});